# fast-feed

docker run --name fastfeet -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=fastfeet -e POSTGRES_PASSWORD=docker -d postgres

yarn sequelize db:migrate
yarn sequelize-cli db:seed:all

