const express = require('express');
const app = express();
// const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const method_override = require('method-override');
const session = require('express-session');

// api
require('dotenv/config');

const routes = require('./routes');
const templatesEngine = require('./utils/handlebar');

const db = require('./config/db');

// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

db.connect();

// sd middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session

app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: {
        maxAge: 3600000000, // Thời gian sống của session tính bằng mili giây, ví dụ: 1 giờ
    },
    rolling: true, // Tự động tái thiết lập lại session sau mỗi lượt request
}));

// app.engine('.hbs', engine({
//     extname: '.hbs',
//     helpers: {
//         sum: (a, b) => a + b,
//     },
// }));

templatesEngine(app);

app.use(method_override('_method'));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

routes(app);

// app.get('/', req, res, next=>{

// })

const api = process.env.API_URL
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(api);
});
