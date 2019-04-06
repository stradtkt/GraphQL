const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const customers = [
    {id: '1', name: 'Kevin Stradtman', email: 'kevin@gmail.com', age: 32},
    {id: '1', name: 'Adam S', email: 'adam@gmail.com', age: 31},
    {id: '1', name: 'Allie Lat', email: 'allie@gmail.com', age: 29},
    {id: '1', name: 'Dom Lat', email: 'dom@gmail.com', age: 30}
];

const customerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: customerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                for(let i = 0; i < customers.length; i++) {
                    if(customers[i].id == args.id) {
                        return customers[i];
                    }
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});