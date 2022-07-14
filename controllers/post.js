const {Post, User} = require('../models');

const poster = {
    getAllPosts(req, res) {
        Post.find({}).then(dbPostData => res.json(dbPostData)).catch(err => {res.status(400).json(err)});
    },
    getOnePost(req, res) {
        Post.findOne({ _id: params.id })
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: 'no posts found'});
                return;
            }
            res.json(dbPostData);
        }).catch(err => res.json(err));
    },
    createPost(req, res){
        Post.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { reply: _id }},
                    { new: true }
                );
            }).then(dbPostData => {
                if (!dbPostData) {
                    res.status(404).json({ message: 'no posts found' });
                    return;
                }
                res.json(dbThoughtData);
            }).catch(err => res.status(400).json(err));
    },
    updatePost(req, res) {
        Post.findOneAndUpdate({ _id: params.id }, body, {new: true})
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: 'no post found'});
                return;
            }
            res.json(dbPostData);
        }).catch(err => {res.status(400).json(err)});
    },

    deletePost(req,res) {
        Post.findOneAndDelete({ _id: params.postId }).then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: 'no post found' });
                return;
            }
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { reply: params.postId } },
                { new: true }
              );
        }).then(dbPostData => {
            console.log(dbPostData);
            if(!dbPostData) {
                res.status(404).json({message: 'no user found with this id'});
                return;
            }
            res.json(dbPostData);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
}

module.exports = poster;