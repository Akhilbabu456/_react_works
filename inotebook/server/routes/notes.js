const express = require("express")
const router = express.Router()
const {body , validationResult} = require("express-validator")
const authMiddleware = require("../middlewares/authMiddleware")
const Notes = require("../models/noteModel")

router.get("/fetchnotes", authMiddleware, async(req,res)=>{
    const notes = await Notes.find({user: req.user._id})
    res.json(notes)
})

router.post("/addnotes", authMiddleware, [
    body("title")
    .isLength({min: 3})
    .withMessage("title is short"),
    body("description")
    .isLength({min: 5})
    .withMessage("description is short"),
], async(req,res)=>{
    const {title, description, tag} = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }else{
       try{
         const note = new Notes({
            title: title,
            description: description,
            tag: tag,
            user: req.user._id
         })
         await note.save()
         res.json(note)
       }catch(err){
        console.log(err.message)	
        res.json({
            message: "Internal server error"
        })
       }
    }
})

router.put("/updatenote/:id", authMiddleware, async(req,res)=>{
    const {title, description, tag} = req.body
    const data = await Notes.findOne({_id: req.params.id})
    try{
      if(data.user.toString() !== req.user.id){
          res.status(404).json({
              message: "Not allowed"
          })
      }else{
        const note = await Notes.findByIdAndUpdate({_id: req.params.id},{
            title,
            description,
            tag
        })
        res.json(note)
      }
    }catch(err){
        console.log(err.message)	
        res.json({
            message: "Internal server error"
        })
    }
})

router.delete("/deletenote/:id", authMiddleware, async(req,res)=>{
    const data = await Notes.findOne({_id: req.params.id}) 
    try{
        if(!data){
            res.status(404).json({
                message: "Not found"
            })
        }else if(data.user.toString() !== req.user.id){
            res.status(404).json({
                message: "Not allowed"
            })
        }else{
            await Notes.deleteOne({_id: req.params.id})
            res.json({
                message: "Deleted successfully"
            })
        }
    }catch(err){
        console.log(err.message)	
        res.json({
            message: "Internal server error"
        })
    }
})

module.exports = router