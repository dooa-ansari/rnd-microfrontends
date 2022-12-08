/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: Int!) {
    getProducts(id: $id) {
      id
      Name
      Colors
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: TableProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Colors
      }
      nextToken
    }
  }
`;
