const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    return res.render('home.ejs')
})


module.exports = router;