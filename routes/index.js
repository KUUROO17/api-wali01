var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'Welcome Wali GG Gaming API' })
})

module.exports = router
