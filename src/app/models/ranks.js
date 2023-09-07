const mongoose = require('mongoose');
// generate slug
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const ranks = new Schema(
    {
        Ranks_ID: { type: String, require: true },
        round: { type: String },
        winner_id: { type: String },
        loser_id: { type: String },
        top_winner: { type: String },
        top_loser: { type: String },
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);

// override all
ranks.plugin(mongooseDelete, { overrideMethods: 'all' });

// course.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
module.exports = mongoose.model('ranks', ranks, 'ranks');
