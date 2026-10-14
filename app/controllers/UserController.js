const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt');


module.exports = {
    index: (req, res) => {
        UserModel.find({})
            .then((events) => {
                res.json(events)
            })
            .catch((err) => {
                return res.status(500).json({
                    message: "Error while fetching users",
                    error: err
                })
            })
    },
    create: async (req, res) => {
        const user = new UserModel({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        user.save().then((user) => {
            return res.status(201).json(user)
        })
            .catch((err) => {
                return res.status(500).json({
                    message: "Error while create user",
                    error: err
                })
            })

    },
    update: (req, res) => {
        const id = req.params.id
        UserModel.findByIdAndUpdate(id, req.body).then((user) => {
            return res.status(201).json(user)
        })
            .catch((err) => {
                return res.status(500).json({
                    message: " Error while updating user",
                    error: err
                })
            })
    },

    delete: (req, res) => {
        const id = req.params.id
        UserModel.findByIdAndDelete(id, req.body).then((user) => {
            return res.status(201).json(user)
        })
            .catch((err) => {
                return res.status(500).json({
                    message: "Error while deleting user",
                    error: err
                })
            })
    },
    comparePasswords: (req, res) => {
        UserModel.findOne({
            email: req.body.email
        })
            .then((user) => {
                if ( user === null ) {
                    return res.status(401).json({
                        message: "Unathourized"
                    })
                }
                const userInputPassword = req.body.password;
                const userHashedPassword = user.password;
                bcrypt.compare(userInputPassword, userHashedPassword, (err, result) => {
                    if (err) {
                        console.error("Unexpected error", err)
                        return
                    }
                    if (result) {
                        console.log("Password correct")
                        const token = user.generateAuthToken(user);
                        res.cookie("AuthToken", token);
                        res.status(200).json({
                            name: user.name,
                            jwt: token
                        })

                    }
                    else {
                        console.log("Passwords do not match")
                        return res.status(401).json({
                        message: "Unathourized"
                    })
                    }
                })
            })


    }
}
