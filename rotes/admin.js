const express = require('express')
const router = express.Router()

router.get('/admin' , ()=> {
    res.render('./views/admin/home')

}) 



module.exports = router