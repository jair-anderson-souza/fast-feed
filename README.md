# Fast Feet

This project was developed with [Node](https://nodejs.org/en/) version 10.18.1.

## Getting Started 

Run next steps: 

`docker run --name fastfeet -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=fastfeet -e POSTGRES_PASSWORD=docker -d postgres`

`yarn sequelize db:migrate`

`yarn sequelize-cli db:seed:all`


## Development server

Run `yarn dev` for a dev server. Ob browser, navigate to `http://localhost:3000/`. All the endpoins are avaliable in `routes.js`.
