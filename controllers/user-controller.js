const {User,Post} = require('../models');

const userController = {
    getUsers(req, res){
        User.find({})
            .populate({
                path: 'reply',
                select: '-__v'
            }).select('-__v').then(dbUserData => res.json(dbUserData)).catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getUserById(req,res){
        User.findOne({ _id: params.id })
            .populate({
                path: 'reply',
                select: '-__v'
            }).select('-__v').then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "invalid user id" });
                    return;
                }
                res.json(dbUserData);
            }).catch(err => res.json(err));
    },

    newUser(req, res) {
        User.create(body).then(dbUserData => res.json(dbUserData)).catch(err => res.json(err));
    },

    updateUser(req, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true }).then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "invalid user id!" });
                    return;
                }
                res.json(dbUserData);
            }).catch(err => res.json(err));
    },

    deleteUser(req, res){
        User.findOneAndDelete({ _id: params.id }).then(dbUserData => res.json(dbUserData)).catch(err => res.json(err));
    }
}

module.exports = userController;