const{AuthenticationError} = require('apollo-server-express')
const User =require('../model/user')
const {signToken} = require('../utils/auth')
const resolvers = {
   Query: {
       getUser: async(parent, args, context) =>{
        if(context.user){
        const userInfo=await User.findOne({_id:context.user._id})
        return userInfo
        }
        throw new AuthenticationError("is not logged in")

       }
   },
   Mutation: {
    login: async(parent,{userName, password}) => {
    const user = await User.findOne({userName})
    if (!user){
        throw new AuthenticationError('wrong password or userName')

    }
    // password validation
    const token = signToken(user)
    return {token, user}

    }

   }
    
};




module.exports = resolvers;