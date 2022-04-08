const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();

exports.checkClientRole =  (req,res, next)=>{
  let token = req.headers.authorization
console.log(token);
  if(!token){
      res.status(400).json({
          message: 'you dont have access to this service'
      })
  }


  try {
    console.log('message');
      const payload = jwt.verify(token, process.env.SECRET_KEY)
     console.log('payaload',payload);
      if(!payload.role == 'client'){
          res.status(400).json({
              message: "you dont have access to this data"
          })
          
      }else if(payload.role == 'client'){
          next()
      }
      
  } catch (error) {
      res.send(error)
      
  }
}


exports.checkLivreurRole =  (req,res, next)=>{
  let token = req.headers.authorization
console.log(token);
  if(!token){
      res.status(400).json({
          message: 'you dont have access to this service'
      })
  }


  try {
    console.log('message');
      const payload = jwt.verify(token, process.env.SECRET_KEY)
     console.log('payaload',payload);
      if(!payload.role == 'livreur'){
          res.status(400).json({
              message: "you dont have access to this data"
          })
          
      }else if(payload.role == 'livreur'){
          next()
      }
      
  } catch (error) {
      res.send(error)
      
  }
}