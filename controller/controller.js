var getAllUsers = function(req,res,next) {
  models.Users.findAll()
  .then((users)=>{
    res.send(users)
  })
  .catch((err) => {
    console.log(err);
  })
}



module.exports =  {

}
