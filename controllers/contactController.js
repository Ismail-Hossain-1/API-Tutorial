
const asyngHandler= require('express-async-handler');
const Contact = require('../models/contactModel');
/* Get all contacts
route GET /api/contacts
access public*/

const getContacts= asyngHandler(async (req, res)=>{
    const contact =await Contact.find();
    res.status(200).json(contact);
});
const getContact= asyngHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});
/* Create new contacts
route POST /api/contacts
access public*/

const addUser=asyngHandler(async(req, res)=>{
   // console.log({"Requested body is ": req.body});
    const {user_id, user_name, balance}=req.body;
    const user = await User.create({
        user_id, 
        user_name, 
        balance
    });

    if(!user_id || !user_name||!balance){
        res.status(400);
        throw new Error ("All these are mandatory");
    }
    res.json(user);
});
/* Update contacts
route EPDATE /api/contacts/id
access public

const updateContact= asyngHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    };
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );

    res.status(200).json(contact);
});
/* Delete contacts
route DELETE /api/contacts?id
access public*/

/*const deleteContact= asyngHandler(async(req, res)=>
{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne({_id: req.params.id});
    res.json(contact);
});     */

const addStation= asyngHandler(async(req, res)=>{
    const {statin_id, station_name, longitude, latitude}=req.body;
    const station = await Stations.create({
        station_id, 
        station_name, 
        longitude,
        latitude
    });
    res.json(station);
});



module.exports={ 
    // getContacts,
    // getContact,
    // // createContact, 
    // updateContact,
    //  deleteContact,
     addStation,
    addUser
    };