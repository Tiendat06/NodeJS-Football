const R64 = require('../models/R64');
const R32 = require('../models/R32');
const R16 = require('../models/R16');
const R8 = require('../models/R8');
const R4 = require('../models/R4');
const R2 = require('../models/R2');
const R1_2 = require('../models/R1_2');
const R3_4 = require('../models/R3_4');
const player = require('../models/player');
const ad_account = require('../models/ad_account');
const { multipleMongooseToObj } = require('../../utils/mongoose');

class PlayerController {
    player(req, res, next) {
        // res.render('player/player');
        if(req.session.user){
            if(req.session.user === "admin"){
                Promise.all([
                    player.find({ added: null }).sort({ player_id: 1 }),
                    R64.find({ player1: null, player2: null }).sort({ RID: 1 }),
                ])
                    .then(([players, r64]) => {
                        // console.log('hii');
                        res.render('player/player', {
                            players: multipleMongooseToObj(players),
                            r64: multipleMongooseToObj(r64),
                        });
                    })
                    .catch((err) => {
                        next(err);
                    });
            }else{
                // Promise.all([
                //     player.find({}).sort({player_id: 1}),
                //     player.countDocuments(),
                // ]).then(([player, count]) => {
                //     res.render('player/player_info',{
                //         player: multipleMongooseToObj(player),
                //         count,
                //     })
                // }).catch((err) => {
                //     next(err);
                // })
                player.countDocuments()
                .then((count) =>{
                    res.render('error/502', {
                        count,
                    })
                })
                .catch((err) => {
                    next(err)
                });
            }
            
        }else{
            res.redirect('/log/login');
        }
    }

    

    add(req, res, next) {
        // res.render('player/add');
        var formData = req.params;
        var player1 = req.body.player1;
        var player2 = req.body.player2;
        // console.log(formData.id);
        R64.updateOne({RID: formData.id}, req.body)
        // .then(() => res.redirect('/player'))
        .catch((err) => next(err))


        player.updateMany({player_id: [player1, player2]}, {
            added: 'added'
        })
        .then(() => res.redirect('/player'))
        .catch((err) => next(err))

    }

    onchangePlayer(req, res, next) {
        // console.log('looooo');
        // console.log(req.body.round_id);
        var ajaxData = req.body;
        var round_id = ajaxData.round_id;
        var round = round_id.toUpperCase();
        // console.log(round);

        var roundModels = {
            R64: R64,
            R32: R32,
            R16: R16,
            R8: R8,
            R4: R4,
            R2: R2,
        };

        if (round in roundModels) {
            var ROUND = roundModels[round];
            ROUND.find({})
                .then((match) => {
                    // var matchData = multipleMongooseToObj(match)
                    // res.json(matchData)
                    // res.send(matchData)
                    const optionsHTML = match
                        .map((match) => {
                            return `<option value='${match.RID}'>${match.RID}</option>`;
                        })
                        .join('');
                    res.send(optionsHTML);
                    // console.log(matchData)
                    // console.log('ok')
                })
                .catch((err) => next(err));
        } else {
            res.send('ERR!!');
        }
    }
}

module.exports = new PlayerController();
