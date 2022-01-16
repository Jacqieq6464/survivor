const { Class } = require('../model');

const resolvers = {
    type User {
    :async () => {
        return await Class.find({});
        }
    }
};




module.exports = resolvers;