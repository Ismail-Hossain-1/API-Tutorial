const asyngHandler= require('express-async-handler');


const registerUser= asyngHandler(async  (req, res)=>{
    res.json({message:'Register the user'})
});
const loginUser= asyngHandler(async  (req, res)=>{
    res.json({message:'Login the user'})
});



/*
GET /api/users/current
it is a private method
*/
const currentUser= asyngHandler(async  (req, res)=>{
    res.json({message:'current user'})
});


module.exports = {registerUser, loginUser, currentUser};