const mongoose = require('mongoose');
// generate slug
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const player = new Schema(
    {
        player_id: { type: String, require: true },
        player_name: { type: String },
        player_phone: { type: String },
        player_mail: { type: String },
        player_pass: { type: String },
        player_ingame: { type: String },
        added: { type: String },
        attendance: { type: String },
        // slug: { type: String, slug: 'name'},
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);

// override all
player.plugin(mongooseDelete, { overrideMethods: 'all' });

// course.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
module.exports = mongoose.model('player', player, 'player');
