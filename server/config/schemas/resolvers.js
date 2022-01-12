const { Class } = require('../model');

const resolvers = {
    Query: {
    classes: async () => {
        return await Class.find({});
        }
    }
};




module.exports = resolvers;