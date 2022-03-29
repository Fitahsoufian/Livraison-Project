const express = require('express');
const authRouter = require("./routes/authRouter")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to livraison application." });
  });
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.use('/api', authRouter)





