// const ItemModel = require('../app/models/Item');
let sessions = '';
module.exports = {
    //list
    multipleMongooseToObj: function (mongoosesArrays) {
        return mongoosesArrays.map((mongoosesArrays) =>
            mongoosesArrays.toObject(),
        );
    },

    mongooseToObj: function (mongoosesOne) {
        return mongoosesOne ? mongoosesOne.toObject() : mongoosesOne;
    },

    generateRandomCode: function (length) {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        return code;
    },

    saveSession: function (session){
        sessions = session;
    },

    getSession: function (){
        // console.log('oke');
        // console.log(sessions);
        return sessions;
    }

    // checkSlug: async function(name) {
    //     // Kiểm tra xem có bản ghi nào có name trùng với name truyền vào hay không
    //     const existingItem = await ItemModel.findOne({ name: name });

    //     if (existingItem) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // },
};
