const User = require("../models/User")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config();
const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
  };
exports.SignUp = async (req, res)=>{
    try{
        const user = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            number : req.body.number
        })
        const token = generateJwtToken (user._id, user.role);
        res.status(201).json({
            user:user,
            token
        })
    } catch(error){
        res.send(error)
    }
}
exports.SignIn = async (req, res)=>{
    try{
        const {email, password} = req.body
    const user = await User.findOne({where:{email:email}&&{password:password}})
    if(!user || !user.password == password){
        res.status(401).json({
            message : 'email or password not correct'
        })
    }
    const token = generateJwtToken(user._id, user.role)
        res.status(200).json({
            message:'sucess',
            token
        })
}catch (error){
    res.status(401).send(error)
    console.log(error);
}
}