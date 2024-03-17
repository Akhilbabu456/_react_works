const express = require("express")
const bcrypt = require("bcryptjs")
const {body, validationResult} = require("express-validator")
const User = require("../models/userModel")
const authMiddleware = require("../middlewares/authMiddleware")
const generateToken = require("../config/generateToken")
const router = express.Router()


router.post("/signup", [
    body("name")
    .isLength({min: 3})
    .withMessage("Enter valid name"),
    body("email")
    .isEmail()
    .withMessage("Enter valid email"),
    body("password")
    .isLength({min: 5})
    .withMessage("Password must be atleast 5 characters long")
], async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }else{
        const data = await User.findOne({email: req.body.email})
       if(data){
           return res.status(400).json({error: "Email already exists"})
       }else{
        const saltRound = 10
        const hashedPassword = await bcrypt.hash(req.body.password, saltRound)
           try{
               const user = new User({
                   name: req.body.name,
                   email: req.body.email,
                   password: hashedPassword
               })
               await user.save()
               res.json(user)
           }catch(err){
               console.log(err.message)
               res.status(500).send("Internal Server Error")
           }
       }
    }
    
})

router.post("/login", [
    body("email")
    .isEmail()
    .withMessage("Enter valid email"),
    body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")	
], async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }else{
        const data = await User.findOne({email: req.body.email})
        const passwordCompare = await bcrypt.compare(req.body.password, data.password)
        try{
            if(data && passwordCompare){
              const token = generateToken(data._id)
              res.json({
                id: data._id,
                token: token
            })
            }else{
              return res.status(400).json({
                    message: "Invalid credentials"
                })
            }
        }catch(err){
            console.log(err.message)	
            res.json({
                message: "Internal server error"
            })
        }
    }

})

router.post("/getuser", authMiddleware, async(req,res)=>{
    try{
       const id = req.user._id
       const user = await User.findById(id).select("-password")
       res.json({
        user: user
       })
    }catch(err){
        console.log(err.message)	
        res.json({
            message: "Internal server error"
        })
    }
})

module.exports = router