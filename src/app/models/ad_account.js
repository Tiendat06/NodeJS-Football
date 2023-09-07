const mongoose = require('mongoose');
// generate slug
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const ad_account = new Schema(
    {
        ad_id: { type: String, require: true },
        ad_name: { type: String },
        ad_mail: { type: String },
        ad_pass: { type: String },
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);

// override all
ad_account.plugin(mongooseDelete, { overrideMethods: 'all' });

// course.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
module.exports = mongoose.model('ad_account', ad_account, 'ad_account');
