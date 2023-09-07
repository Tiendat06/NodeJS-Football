const { engine } = require('express-handlebars');
// const { getSession } = require('./mongoose');
// const player = require('../app/models/player');

// const hbs = require('handlebars');


function templatesEngine(app) {
    app.engine(
        '.hbs',
        engine({
            extname: '.hbs',
            helpers: {
                sum: (a, b) => a + b,

                sttMatch: function (number) {
                    if (number + 1 < 10) {
                        return '00' + (number + 1);
                    } else if (number + 1 >= 10 && number + 1 < 100) {
                        return '0' + (number + 1);
                    } else {
                        return number + 1;
                    }
                },
                // getLogout: function () {
                //     if(getSession != ''){
                //         return false;
                //     }
                //     return true;
                // }
                // compareNumber
            },
        }),
    );
}

module.exports = templatesEngine;
