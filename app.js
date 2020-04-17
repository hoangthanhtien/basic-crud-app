const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({message: 'Welcome to the project support!'});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is running at port ${PORT}`);
})