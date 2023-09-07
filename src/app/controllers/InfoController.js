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

class InfoController {
    info(req, res, next) {
        if(req.session.user){
            Promise.all([
                player
                    .find({})
                    .sort({ player_id: 1 }),
                player.countDocuments(),
            ])
                .then(([player, count]) => {
                    res.render('info/info', {
                        player: multipleMongooseToObj(player),
                        count
                    });
                })
                .catch((err) => {
                    next(err);
                });
        }else{
            res.redirect('/log/login');
        }
        // res.render('info/info');
    }
}

module.exports = new InfoController();
