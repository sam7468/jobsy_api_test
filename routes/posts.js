const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
    try{
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        })
        const newPost = await post.save();
        res.status(201).json(newPost)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
});

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const posts = await Post.find({_id: id});
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const posts = await Post.deleteOne({_id: id});
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});


router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const newData = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        }
        const newPost = await Post.findOneAndUpdate({_id: id}, newData, {new:true} );
        res.status(201).json(newPost)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
});

module.exports = router;