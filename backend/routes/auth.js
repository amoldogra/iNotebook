const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const router = express.Router();
// create a user using : Post  "/api/auth"
router.post('/', [body('email', 'Enter a valid email').isEmail(),
                  body('name', 'Enter a valid name').isLength({ min: 3 }),
                  body('password', 'Enter correct password').isLength({ min: 5 })],
(req, res)=>{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      }).then(user => res.json(user));
 
      
})

module.exports = router