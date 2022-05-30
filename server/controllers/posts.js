import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try{
        console.log("start");
        const postMessages = await PostMessage.find();
// console.log("getPost");

        res.status(200).json(postMessages);
    } catch(error){
        // console.log("error with getting data");
        res.status(404).json({message: error.message});
    }
}

// Post Method
export const createPost = async (req,res)=>{
    const post = req.body;
// console.log("hello");
    const newPost = new PostMessage(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

// Update the Post 
export const updatePost = async (req,res)=>{
    const {id: _id} = req.params;
    // console.log("update");
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that ID');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);
}

// Update the Post 
export const deletePost = async (req,res)=>{
    const {id} = req.params;
    // console.log("delete");
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that ID');
    
    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post deleted Successfully'});
}

// Update Like the Post 
export const likePost = async (req,res)=>{
    const {id} = req.params;
    // console.log("Like");
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that ID');
    
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1}, {new: true});

    res.json(updatedPost);
}