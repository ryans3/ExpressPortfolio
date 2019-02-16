
//Name of File: contact.js
//Name: Ryan Sterling
//Student Number: 300509648
//Date: Thursday, February 14, 2019


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let contact = require('../models/contact');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    contact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            
        }
    });
});

module.exports = router;