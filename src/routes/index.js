const siteRouter = require('./site');
const matchlistRouter = require('./match_list');
const infoRouter = require('./info');
const playerRouter = require('./player');
const logRouter = require('./log');
const errorRouter = require('./error');
// const itemRouter = require('./item');

function routes(app) {
    // app.use('/item', itemRouter);
    app.use('/', siteRouter);
    app.use('/match_list', matchlistRouter);
    app.use('/info', infoRouter);
    app.use('/player', playerRouter);
    app.use('/log', logRouter);
    app.use('error', errorRouter);
    
}

module.exports = routes;
