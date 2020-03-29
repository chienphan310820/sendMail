var express = require('express');
var router = express.Router();
var sendMail = require('./sendMail')

router.post('/mail', (req, res, next) => {
  let subject = req.body.subject
  let text = req.body.text
  let to = req.body.email
  // console.log(to);
  // console.log(text);
  // console.log(subject);
  sendMail(to, subject, text, req, res)
  return res.json({
    error: false,
    message: "gửi mail thành công"
  })
})
module.exports = router;