const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'devismakinginotebook';

const router = express.Router();
// create a user using : Post  "/api/auth/createuser"
router.post('/createuser', [body('email', 'Enter a valid email').isEmail(),
                  body('name', 'Enter a valid name').isLength({ min: 3 }),
                  body('password', 'Enter correct password').isLength({ min: 5 })],
                  // if there is error return bad request
async (req, res)=>{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }



    // check weather user exist already
    try{

    
    let user = await User.findOne({email: req.body.email});  
    if(user){
      return res.status(400).json({error: "User Already Exists"})
    }

    // creating password into hash and adding salt init  using npm package "bcrypt"
    
    const salt = await bcrypt.genSalt(10);  
     const secPass =  await bcrypt.hash(req.body.password, salt); 
   user = await  User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      });

      // creating a unique token for every user to login in it using npm package "jsonwebtoken"
      
        const data = {
          user:{
            id : user.id
          }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({authtoken})
    }
    catch(error){
    console.error(error.message);
    res.status(500).send("Some Error Occured");
    }
})

module.exports = router