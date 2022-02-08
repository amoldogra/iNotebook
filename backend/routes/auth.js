const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

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
   user = await  User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
   //      .then(user => res.json(user));
 
      res.json({user})
    }catch(error){
    console.error(error.message);
    res.status(500).send("Some Error Occured");
    }
})

module.exports = router