const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();


exports.requireSignin = async(req, res, next) => {
  // if (req.headers.authorization) {
    // const token = req.headers.authorization.split(" ")[1];
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);
    // req.tokenData = user;
    req.tokenData = await {id: user._id , role: user.role};
  // } else {
  //   return res.status(400).json({ message: "Authorization required" });
  // }
  if (!token){ 
    res.status(401).json({ error: "no token found"}) 
}else {
    try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      // req.tokenData = user;
      req.tokenData = await {id: user._id , role: user.role};
        
        next()
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}
  // next();
  //jwt.decode()
};
exports.clientMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const data = jwt.verify(token, process.env.SECRET_KEY);  
  console.log(JSON.parse(token));  
  if (data.role !== "client") {
    return res.status(400).json({ message: "Client access denied" });
  }
  next();
};

exports.adminMiddleware = (req, res, next) => {
  if (req.tokenData.role !== "livreur") {
    if (req.tokenData.role !== "client") {
      return res.status(400).json({ message: "Livreur access denied" });
    }
  }
  next();
};

exports.superAdminMiddleware = (req, res, next) => {
  if (req.tokenData.role !== "admin") {
    return res.status(200).json({ message: "Admin access denied" });
  }
  next();
};