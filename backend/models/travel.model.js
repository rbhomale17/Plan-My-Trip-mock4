const mongoose = require('mongoose');

const TravelSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    destination: { type: String, enum: ["India", "Africa", "Europe", "America"], require: true },
    No_of_trvelers: { type: Number, require: true },
    budget_per_person: { type: Number, require: true }
}, { versionKey: false });

const TravelModel = mongoose.model('travel', TravelSchema);

module.exports = TravelModel