const { GraphQLClient } = require('graphql-request');

const graphQLClient = new GraphQLClient(
    'https://pickbazar-api.now.sh/shop/graphql'
);

module.exports = graphQLClient;
