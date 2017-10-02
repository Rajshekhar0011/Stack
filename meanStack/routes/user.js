
/*
 * GET users listing.
 */
/*"exports" keyword is used to ensure that the 
functionality  defined in this file can be available to other files*/

exports.list = function(req, res){
  res.send("respond with a resource");

};



var mongoose =require('mongoose');
module.export=mongoose.model('User',{
	email:String,
	password: String
});


