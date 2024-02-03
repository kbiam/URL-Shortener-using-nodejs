const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/urlshortener");

const urlSchema  = new mongoose.Schema({
  shortId:{
    type:String,
    unique:true,
    required:true
  },
  redirectURL:{
    type:String,
    required:true
  },
  visitHistory:[{ timestamp: {type:Number }}],
},
{
  timestamps:true
}
);

module.exports = mongoose.model("URL",urlSchema);