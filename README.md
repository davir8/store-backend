# Product Store Backend

This project was developed using nodejs, mongodb and graphql to add, list and search products.

## Prerequisites

* Node 8.10.0 or later on your local development machine
* MongoDB


## Installing

* First you need to create database ẁith the name `store` in your machine;
* After that you should clone this repository on your machine with the `git clone https://github.com/davir8/store-backend`;
* Go to the project directory with the `cd store-backend` command;
* After that install the project dependencies using `npm install` or` yarn install`;
* Now run the project using `npm start` or `yarn start`;

if all went well, the project will be available at: http://localhost:4000/graphq


## Endpoints

### Queries
* `me: User`
* `users: [User]`
* `
products(
filter: String
page: Int
limit: Int
): ProductPaginate
`
* `
product(
id: ID
): Product
`

### Mutations
* `
signup(
name: String!
email: String!
password: String!
): AuthPayload
`
* `
login(
email: String!
password: String!
): AuthPayload
`
* `
createProduct(
name: String!
description: String!
url: String
userId: ID
): Product
`


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
