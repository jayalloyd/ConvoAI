import Thread from "../models/Thread.js";
import express from "express";
const router=express.Router();
router.post("/test",async(req,res)=>{
try{
    const thread=new Thread({
        threadId:"xyz",
        title:"Testing the new thread"
    });
    const response=await thread.save();
    res.send(response);
}
catch(err){console.log(err);
    res.status(500).json({error: "failed tosave in DB"});
}

});
router.get('/threads',async(req,res)=>{
    try{
        const threads=await Thread.find({}).sort({updatedAt:-1});
        //descedning order of updatedAt
        res.json(threads);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch threads"});
    }
});
router.get('/threads/:threadId',async(req,res)=>{
    const {threadId}=req.params;
    try{
        const thread=await Thread.findOne({threadId});
        if(!thread){
            return res.status(404).json({error:"Thread not found"});
        }
        res.json(thread.messages);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch thread"});
    }
});
router.delete('/threads/:threadId',async(req,res)=>{
    const {threadId}=req.params;
    try{
        const thread=await Thread.findOneAndDelete({threadId});
        if(!thread){
            return res.status(404).json({error:"Thread not found"});
        }
        res.status(200).json({message:"Thread deleted successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to delete thread"});
    }
});
export default router;