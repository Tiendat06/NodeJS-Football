const mongoose = require('mongoose');
// generate slug
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const R2 = new Schema(
    {
        RID: { type: String, require: true },
        R2_R1_2ID: { type: String },
        loser_id: { type: String },
        loser_result: { type: String },
        player1: { type: String },
        player2: { type: String },
        winner_id: { type: String },
        winner_result: { type: String },
        // slug: { type: String, slug: 'name'},
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);

// override all
R2.plugin(mongooseDelete, { overrideMethods: 'all' });

// course.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
module.exports = mongoose.model('R2', R2, 'R2');
