const express = require('express');
// const errorHandler = require('./middleware/errorHandler');
// const connectDB = require('./config/db');
// //const { addUser } = require('./controllers/contactController');
// const { default: mongoose } = require('mongoose');

 const dotenv= require('dotenv').config();
// connectDB();
const mongoose = require('mongoose');
const app = express();


mongoose.connect(process.env.COLLECTION);
app.use(express.json());

const port = process.env.PORT||3000;

//app.use(errorHandler);
//app.use('/api/contacts', require('./routes/contactRoutes'));
//app.use('/api/users', require('./routes/contactRoutes'));
//app.use('/api/stations', require('./routes/contactRoutes'));



const userSchema= {
    user_id: Number,
    user_name:String, 
    balance:Number,
};

const user = mongoose.model("Users", userSchema);
//const userSh = mongoose.model("User", userSchema);

//app.get("/api", addUser);

// app.post('/post', async (req, res)=>{
//     const data = new userSh({
//         user_id: req.body.user_id,
//         user_name:req.body.user_name,
//         balance:req.body.balance,
//     });
//     const save = await data.save();
//     console.log(data);
//     res.json(data);
// });

app.get('/', (req, res)=>{
    res.send("Hello first page");
});

app.post('/post', async (req, res)=>{
    console.log("I am inside post method");
        const data = new user({
            user_id: req.body.user_id,
            user_name: req.body.user_name,
            balance: req.body.balance
        });
       const val= await data.save();
        res.send(val);
});
app.get('/get', async (req, res)=>{
    //const {user_id, user_name, balance}= req.body;
    const data = await user.find({},{_id:1, user_id:1, user_name:1, balance:1});
    res.json(data);
});
app.get('/get/:id', async (req, res)=>{
    //const {user_id, user_name, balance}= req.body;
    const data = await user.find(req.params.id);//{},{_id:1, user_id:1, user_name:1, balance:1});
    res.json(data);
});
app.delete('/delete/:id', async (req, res)=>{
    //const {user_id, user_name, balance}= req.body;
    const data = await user.find({},{_id:1});
    res.json(user);
     await user.deleteOne({_id:req.params.id});

});

app.listen(port, ()=>{
    console.log(`Running on http://localhost:${port}`);
});