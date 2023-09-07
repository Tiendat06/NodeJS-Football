const ad_account = require('../models/ad_account');
const player = require('../models/player');
const { multipleMongooseToObj, saveSession, getSession } = require('../../utils/mongoose');

// var sessions = '';
class LogController {
    login(req, res, next) {
        player.countDocuments()
        .then((count) => {
            res.render('log/login', {
                count
            });
        })
        .catch(err => {
            next(err);
        });
    }

    // [GET]
    logout(req, res, next) {
        req.session.destroy(err => {
            if(err) {
                console.error(err);
            }
        })
        // res.json(req.session.user);
        res.redirect('/log/login');
    }

    // [POST]
    confirmLogin(req, res, next){
        // console.log('ok')
        var formData = req.body;
        // res.json(formData);
        ad_account.findOne({ad_id: formData.sid, ad_pass: formData.pwd})
        .then((account) => {
            if(account) {
                // console.log('hi')
                // req.session.user = {
                //     ad_id: formData.sid,
                //     ad_pass: formData.pwd,
                // }
                req.session.user = formData.sid;
                // console.log(req.session.user);

                res.redirect('/')
            }else{
                // res.send('Invalid loggin !!!');
                // console.log('failed')
                // res.json("sai thong tin")
                var wrongMess = 'Invalid id or password';
                res.render('log/login', {
                    wrongMess
                })
                // res.status(500).json('sai thong tin')
                // next("sai thong tin")
                
            }
        })
        .catch(err => {
            next(err);
        })
    }
}

module.exports = new LogController();
