const jwt = require ('jsonwebtoken')
const secret = 'your secret'

module.exports ={
authMiddleware: function({req}){
let token = req.body.token||req.query.token||req.headers.authorization

if(req.headers.authorization){
token=token.split(' ').pop().trim()

}
if(!token){
return req

}
try {
  const {data} = jwt.verify(token, secret, {
    maxAge: "2h"

  })
  req.user=data
} catch (error) {
    console.log('invalid token')
}
return req
},

signToken:function({userName, email,_id}){
const payload ={userName,email,_id}
return jwt.sign({data:payload}, secret,{expiresIn:"2h"})

}

}