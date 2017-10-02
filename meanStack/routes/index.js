
/*GET home page.*/
 /*"exports" keyword is used to ensure that the 
functionality  defined in this file can be available to other files*/

exports.index = function(req, res){
  res.render('view', { title: 'Welcome' });



};