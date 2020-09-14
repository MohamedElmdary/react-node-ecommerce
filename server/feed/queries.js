const { gql } = require('graphql-request');

const getTypesQuery = gql`
    query getTypes($type: String!) {
        categories(type: $type) {
            title
            slug
            type
            children {
                title
                slug
                type
            }
        }
    }
`;

const getProductsQuery = gql`
    query getProducts(
        $type: String
        $category: String
        $offset: Int
        $limit: Int
    ) {
        products(
            type: $type
            category: $category
            offset: $offset
            limit: $limit
        ) {
            items {
                id
                title
                slug
                unit
                price
                salePrice
                description
                discountInPercent
                type
                image
                gallery {
                    url
                }
            }
        }
    }
`;

module.exports = {
    getTypesQuery,
    getProductsQuery,
};
