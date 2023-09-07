const {
    multipleMongooseToObj,
    generateRandomCode,
} = require('../../utils/mongoose');
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
const ranks = require('../models/ranks');

class SiteController {
    // [GET] /
    home(req, res, next) {
        Promise.all([
            R64.find({}).limit(5),
            R32.find({}).limit(5),
            R16.find({}).limit(5),
            R8.find({}).limit(5), 
            player.countDocuments()
        ])
            .then(([r64, r32, r16, r8, count]) => {
                res.render('home', {
                    r64: multipleMongooseToObj(r64),
                    r32: multipleMongooseToObj(r32),
                    r16: multipleMongooseToObj(r16),
                    r8: multipleMongooseToObj(r8),
                    count
                });
                
            })
            
            .catch((error) => {
                next(error);
            });
        // res.render('home');
    }

    ranks(req, res, next) {
        // res.render('site/ranks');
        if(req.session.user){
            Promise.all([
                ranks.find({}).sort({ Ranks_ID: 1 }),
                player.find({}).sort({ player_id: 1 }),
                player.countDocuments()
            ])
                .then(([rank, player, count]) => {
                    res.render('site/ranks', {
                        rank: multipleMongooseToObj(rank),
                        player: multipleMongooseToObj(player),
                        count
                    });
                })
                .catch((err) => next(err));

        }else{
            res.redirect('/log/login');
        }
    }

    // [GET]
    // countPlayers(req, res, next){
    //     player.countDocuments({})
    //     .then(number=>{
    //         res.render('partials/header', {
    //             number
    //         })
    //     })
    // }

    create(req, res, next) {
        res.render('site/create');
    }

    update(req, res, next) {
        var formData = req.body;
        formData.player1 = null;
        formData.player2 = null;
        formData.winner_id = null;
        formData.loser_id = null;
        formData.winner_result = null;
        formData.loser_result = null;
        formData.ranks = null;

        // res.redirect('/');

        // 521H0442
        // let j = 1;
        // for(let i = 1; i <= 2; i++){

        //     if(i < 10){
        //         formData.RID = 'R100' + i;
        //     }else if(i >= 10 && i < 100){
        //         formData.RID = 'R10' + i;
        //     }else{
        //         formData.RID = 'R1' + i;
        //     }

        //     // if(j < 10){
        //     //     formData.ranks = 'RA00'+ j;
        //     // }else if(j >= 10 && j < 100){
        //     //     formData.ranks = 'RA0'+ j;
        //     // }else{
        //     //     formData.ranks = 'RA'+ j;
        //     // }

        //     var R1_data = new R1_2(formData);
        //     R1_data
        //         .save()
        //         // .then(() => {
        //         //     // console.log('OK')
        //         //     // res.redirect('match_list/1_16')
        //         // })
        //         .catch((err) => next(err))
        //     if(i % 2 == 0){
        //         j++;
        //     }
        // }

        // for(let i = 1; i <= 128; i++){
        //     // p_id = p_id.substring(7, 8);
        //     if(i < 10){
        //         formData.player_id = '521H000' + i;
        //         formData.player_name = 'Jake'+i;
        //         formData.player_phone = '0123456789'+i
        //         formData.player_mail = '521H000'+i+'@student.tdtu.edu.vn';
        //         formData.player_ingame = generateRandomCode(8);

        //     }else if(i >= 10 && i < 100) {
        //         formData.player_id = '521H00' + i;
        //         formData.player_name = 'Jake'+i;
        //         formData.player_phone = '012345678'+i
        //         formData.player_mail = '521H00'+i+'@student.tdtu.edu.vn';
        //         formData.player_ingame = generateRandomCode(8);

        //     }else {
        //         formData.player_id = '521H0' + i;
        //         formData.player_name = 'Jake'+i;
        //         formData.player_phone = '01234567'+i
        //         formData.player_mail = '521H0'+i+'@student.tdtu.edu.vn';
        //         formData.player_ingame = generateRandomCode(8);

        //     }
        //     var players = new player(formData);
        //     players
        //         .save()
        //         // .then(() => next())
        //         .catch((err) => next(err))
        // }

        // R4.deleteMany({})
        // .then(() => {
        //     console.log('OK')
        // })
        // .catch((err) => next(err))
    }
}

module.exports = new SiteController();
