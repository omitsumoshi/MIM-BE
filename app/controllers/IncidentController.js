const IncidentModel = require('../models/IncidentModel')
const CustomerModel = require('../models/CustomerModel')

module.exports = {
    index: (req, res)=>{
        IncidentModel.find({})
        .then((events)=>{
            res.json(events)
        })
        .catch((err)=>{
            if(err) {
                return res.status(500).json({
                    message: 'Error while fetching incidents',
                    error: err
                })
            }
        })
    },
    get: (req, res)=>{
        const id = req.params.id
        IncidentModel.findById(id)
        .then((event)=>{
            res.json(event)
        })
        .catch((err)=>{
            if(err) {
                return res.status(500).json({
                    message: 'Error while fetching incidents',
                    error: err
                })
            }
        })
    },
    create: (req, res) => {
        const incident = new IncidentModel({
            customer: req.body.customer,
            country: req.body.country,
            zone: req.body.zone,
            services: req.body.services,
            teams: req.body.teams,
            controller: req.body.controller,
            status: req.body.status
    })
    incident.save().then((incident)=>{
        return res.status(201).json(incident)
    })
    .catch((err)=>{
        return res.status(500).json({
            message: 'Error while creating incident',
            error: err
        })
    })
},
update: (req, res) => {
    // Sprawdzic to z Lukaszem, jak to potem przetlumaczyc na front end
    const id = req.body.id
    IncidentModel.findByIdAndUpdate(id, req.body).then(()=>{
        return res.status(200).json()
    })
    .catch((err)=>{
        return res.status(500).json({
            message: 'Error while updating incident',
            error: err
        })
    })
},
delete: (req, res) =>{
    const id = req.query.id
    IncidentModel.findByIdAndDelete(id).then(()=>{
        return res.status(200).json()
    })
    .catch((err)=>{
        return res.status(500).json({
            message: 'Error while deleting incident',
            error: err
        })
    })
}
}