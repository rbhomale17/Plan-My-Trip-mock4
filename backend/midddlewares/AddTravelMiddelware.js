const TravelModel = require("../models/travel.model");

module.exports = async function AddTravelMiddelware(req, res, next) {
    const { name, email, destination, No_of_trvelers, budget_per_person } = req.body;
    try {
        if (!name || !email || !destination || !No_of_trvelers || !budget_per_person) return res.send({ msg: 'Please Provide All Deatails, Keys Are Case-Sensitive!' });
        let travelData = new TravelModel(req.body);
        await travelData.save();
        req.query.travelData = travelData;
        next();
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

// name: { Type: String, },
// email: { Type: String,  },
// destination: { Type: String, enum:["India", "Africa", "Europe", "America"] },
// No_of_trvelers: { Type: Number,  },
// budget_per_person: { Type: String,  }