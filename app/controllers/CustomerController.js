const CustomerModel = require('../models/CustomerModel')

module.exports = {
    index: (req, res)=>{
        CustomerModel.find({})
        .then((customers)=>{
            res.json(customers)
        })
        .catch((err)=>{
            return res.status(500).json({
                message: 'Error while fetching customers',
                error: err
            })
        })
    },
    get: (req, res)=>{
        const id = req.params.id
        CustomerModel.findById(id)
        .then((customer)=>{
            res.json(customer)
        })
        .catch((err)=>{
            return res.status(500).json({
                message: 'Error while fetching a Customer',
                error: err
            })
        })
    },
    create: (req, res)=>{
        const customer = new CustomerModel({
            name: req.body.name,
            tier: req.body.tier,
            representative: {
                name: req.body.representative.name,
                contact: req.body.representative.contact
            },
            location: {
                country: req.body.location.country,
                zone: req.body.location.zone
            }
        })
        customer.save().then((customer)=>{
            return res.status(201).json(customer)
        })
        .catch((err)=>{
            return res.status(500).json({
                message: 'Error while creating customer',
                error: err
            })
        })
    },
    update: (req, res)=>{
        const id = req.body.id
        CustomerModel.findByIdAndUpdate(id, req.body).then(()=>{
            return res.status(200).json()
            })
            .catch((err)=>{
                return res.status(500).json({
                    message: 'Error while updating client',
                    error: err
                })
        })  
    },
    delete: (req, res)=>{
        const id = req.query.id
        CustomerModel.findByIdAndDelete(id).then(()=>{
            return res.status(200).json()
        })
        .catch((err)=>{
            return res.status(500).json({
                message: 'Error while deleting customer',
                error: err
            })
        }
        )
    }
}
    
