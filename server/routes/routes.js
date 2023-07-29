// routes/routes.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res)=>{
    const imageUrl = './../../home/expense-tracker.png'
    res.render('./../../home/home.ejs' , {imageUrl})
})
router.get('/login',(req,res)=>{
    res.render('./../../loginSection/login.ejs')
})
router.get('/register', (req, res) => {
    // Render the login.ejs file
    res.render('./../../loginSection/register.ejs'); // Assuming login.ejs is located in the root folder
});

router.post('/home', (req, res) => {
    // Handle form submission here if needed
    // For example, you can perform form validation and user authentication

    // Render the home.ejs view
    res.render('./../../main/home.ejs');
});

module.exports = router;
