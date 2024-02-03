var express = require('express');
var router = express.Router();
const URL = require("./users");
var shortid = require('shortid');



router.post('/url', async function(req, res) {
  const shortId = shortid.generate();
  const url = req.body.inputurl;

  const newurl = await URL.create({
    shortId: shortId,
    redirectURL: url,
    visitHistory: []
  });

  console.log(shortId);
  res.json({ newurl });
});  

router.get('/:shortid',async function(req,res){
  let data=await URL.findOneAndUpdate({'shortId':req.params.shortid},{$push:{visitHistory:{timestamp:Date.now()}}})
  let redirecturl = data.redirectURL;
  res.redirect(redirecturl);
})
router.get('/',function(req,res){
  res.render("index");
})
  
module.exports = router;
