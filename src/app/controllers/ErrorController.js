const { multipleMongooseToObj } = require('../../utils/mongoose');

class ErrorController {
    err500(req, res, next) {
        
    }

    err502(req, res, next){
        res.render('error/502');
    }
}

module.exports = new ErrorController();
