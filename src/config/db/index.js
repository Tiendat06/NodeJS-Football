const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/FO4', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
            // useCreateIndex: true,mongodb://localhost:27017/nodejs_dev mongodb://127.0.0.1:27017/nodejs_dev
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect fail');
    }
}

// function connect(){
//     mongoose.connect('mongodb://127.0.0.1:27017/test_1', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(console.log('connect successfully'))
//     .catch((error) =>{
//         console.error('connect fail'+error)
//     })
// }

module.exports = { connect };
