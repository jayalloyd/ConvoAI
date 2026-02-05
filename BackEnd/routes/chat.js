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
export default router;