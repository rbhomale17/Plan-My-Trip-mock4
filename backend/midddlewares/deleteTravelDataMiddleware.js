const TravelModel = require("../models/travel.model");

module.exports = async function deleteTravelDataMiddleware(req, res, next) {
    const { id } = req.params;
    try {
        if (!id) return res.send({ msg: 'Please Provide ID, passed it to params {/:id}' });
        let travelData = await TravelModel.findById(id);
        if (!travelData) return res.send({ msg: 'Data is not Present related to thid ID, Please try Again!' });
        await TravelModel.findByIdAndDelete(id);
        next();
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}