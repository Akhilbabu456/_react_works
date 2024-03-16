const express = require("express")
const User = require("../models/userModel")
const router = express.Router()


router.post("/", (req,res)=>{
    const user = User(req.body)
    user.save()
    res.json([])
})


module.exports = router