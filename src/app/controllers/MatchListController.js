const { multipleMongooseToObj } = require('../../utils/mongoose');
// const Item = require('../models/Item');
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

class MatchListController {
    // [GET] /match_list/1_64
    R64(req, res, next) {
        if(req.session.user){
            Promise.all([
                R64.find({})
                    .sort({ RID: 1 }),
                player.countDocuments()
            ])
                .then(([r64, count]) => {
                    res.render('match_list/1_64', {
                        r64: multipleMongooseToObj(r64),
                        count
                    });
                })
                .catch((error) => {
                    // console.log(error); // In ra lỗi nếu có
                    // res.send('err');
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });
        }else{
            res.redirect('/log/login');
        }
    }

    // [GET] /match_list/1_32
    R32(req, res, next) {

        // res.render('match_list/1_32');
        if(req.session.user){
            Promise.all([
                R32.find({})
                    .sort({ RID: 1 }),
                player.countDocuments()
    
            ])
                .then(([r32, count]) => {
                    res.render('match_list/1_32', {
                        r32: multipleMongooseToObj(r32),
                        count
                    });
                })
                .catch((error) => {
                    console.log(error); // In ra lỗi nếu có
                    // res.send('err');
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });
        }else{
            res.redirect('/log/login');
        }
    }

    // [GET] /match_list/1_16
    R16(req, res, next) {
        // res.render('match_list/1_16');
        if(req.session.user){
            Promise.all([
                R16.find({})
                    .sort({ RID: 1 }),
                player.countDocuments()
    
            ])
                .then(([r16, count]) => {
                    res.render('match_list/1_16', {
                        r16: multipleMongooseToObj(r16),
                        count
                    });
                })
                .catch((error) => {
                    console.log(error); // In ra lỗi nếu có
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });
        }else{
            res.redirect('/log/login');
        }
    }

    // [GET] /match_list/1_8
    R8(req, res, next) {
        // res.render('match_list/1_8');
        if(req.session.user){
            Promise.all([
                R8.find({})
                    .sort({ RID: 1 }),
                player.countDocuments(),

            ])
                .then(([r8, count]) => {
                    res.render('match_list/1_8', {
                        r8: multipleMongooseToObj(r8),
                        count
                    });
                })
                .catch((error) => {
                    console.log(error); // In ra lỗi nếu có
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });
        }else{
            res.redirect('/log/login');
        }
    }

    // [GET] /match_list/1_4
    R4(req, res, next) {
        // res.render('match_list/1_4');
        if(req.session.user){
            Promise.all([
                R4.find({})
                    .sort({ RID: 1 }),
                player.countDocuments()

            ])
                .then(([r4, count]) => {
                    res.render('match_list/1_4', {
                        r4: multipleMongooseToObj(r4),
                        count
                    });
                })
                .catch((error) => {
                    console.log(error); // In ra lỗi nếu có
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });
        }else{
            res.redirect('/log/login');
        }
    }

    // [GET] /match_list/semi
    semi(req, res, next) {
        if(req.session.user){
            Promise.all([
                R2.find({})
                    .sort({ RID: 1 }),
                player.countDocuments()

            ])
                .then(([r2, count]) => {
                    res.render('match_list/semi', {
                        r2: multipleMongooseToObj(r2),
                        count
                    });
                })
                .catch((error) => {
                    console.log(error); // In ra lỗi nếu có
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });

        }else{
            res.redirect('/log/login');
        }
    }

    R3_4(req, res, next) {
        if(req.session.user){
            Promise.all([
                R3_4.find({})
                    .sort({ RID: 1 }),
                player.countDocuments()
    
            ])
                .then(([r3_4, count]) => {
                    res.render('match_list/3_4', {
                        r3_4: multipleMongooseToObj(r3_4),
                        count
                    });
                })
                .catch((error) => {
                    console.log(error); // In ra lỗi nếu có
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });

        }else{
            res.redirect('/log/login');
        }
    }

    final(req, res, next) {
        if(req.session.user){
        Promise.all([
            R1_2.find({})
                .sort({ RID: 1 }),
            player.countDocuments()

        ])
                .then(([r1_2, count]) => {
                    res.render('match_list/final', {
                        r1_2: multipleMongooseToObj(r1_2),
                        count
                    });
                })
                .catch((error) => {
                    console.log(error); // In ra lỗi nếu có
                    next(error); // Gọi hàm next() để chuyển xử lý cho middleware lỗi tiếp theo
                });

        }else{
            res.redirect('/log/login');
        }
    }
}

module.exports = new MatchListController();
