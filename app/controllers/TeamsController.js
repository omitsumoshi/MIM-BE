const TeamsModel = require('../models/TeamsModel')

module.exports = {
    index: (req, res)=>{
            TeamsModel.find({})
            .then((teams)=>{
                res.json(teams)
            })
            .catch((err)=>{
                if(err) {
                    return res.status(500).json({
                        message: 'Error while fetching teams',
                        error: err
                    })
                }
            })
},
  get: (req, res)=>{
        const id = req.params.id
        TeamsModel.findById(id)
        .then((team)=>{
            res.json(team)
        })
        .catch((err)=>{
            if(err) {
                return res.status(500).json({
                    message: 'Error while fetching teams',
                    error: err
                })
            }
        })
    },
    create: (req, res) => {
            const team = new TeamsModel({
                name: req.body.name,
                services: req.body.services,
                teamLead: req.body.teamLead,
                members: req.body.members
            })
        team.save().then((team)=>{
            return res.status(201).json(team)
        })
        .catch((err)=>{
            return res.status(500).json({
                message: 'Error while creating team',
                error: err
            })
        })

},
update: (req, res) => {
    const id = req.params.id
    TeamsModel.findByIdAndUpdate(id, req.body).then((team)=>{
        return res.status(200).json()
    })
    .catch((err)=>{
        return res.status(500).json({
            message: 'Error while updating team',
            error: err
        })
    })
},
delete: (req, res) =>{
    const id = req.query.id
    TeamsModel.findByIdAndDelete(id).then(()=>{
        return res.status(200).json()
    })
    .catch((err)=>{
        return res.status(500).json({
            message: 'Error while deleting team',
            error: err
        })
    })
}

}