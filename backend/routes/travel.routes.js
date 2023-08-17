const express = require('express');
const TravelModel = require('../models/travel.model');
const AddTravelMiddelware = require('../midddlewares/AddTravelMiddelware');
const FilterSortmiddlewres = require('../midddlewares/FilterSortMiddleware');
const deleteTravelDataMiddleware = require('../midddlewares/deleteTravelDataMiddleware');
const travelRouter = express.Router();
// travelRouter.get('/', (req, res) => {
//     res.send({ msg: 'Welcome To Travel Router' })
// })

travelRouter.post('/', AddTravelMiddelware, async (req, res) => {
    try {
        const { travelData } = req.query;
        res.send({ msg: 'Data Saved Succesfully!', travelData })
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

travelRouter.get('/', FilterSortmiddlewres, (req, res) => {
    try {
        const { travelData } = req.query;
        res.send({ travelData })
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

travelRouter.delete('/:id', deleteTravelDataMiddleware, (req, res) => {
    try {
        const { id } = req.params;
        res.status(201).send({ msg: `Travel Data Related To id:- ${id} is Deleted.` })
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

module.exports = travelRouter;