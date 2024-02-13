const express = require('express');
const router = express.Router();
const {getContact,
    getContacts, 
    createContact, 
    updateContact, 
    deleteContact,
    addStation, 
    addUser} = require('../controllers/contactController');


//router.route("/").get(getContacts);
//.post(createContact);
//router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);
router.route('/', addStation);
router.route('/', addUser);
//router.route('/:id').delete(deleteContact);

module.exports= router;