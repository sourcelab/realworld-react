# realworld-react

## Starting the server in development mode

1. Get a bash prompt inside the server container via `docker-compose run --rm --service-ports server bash`
2. Start the server with `npm run debug`, this will start the server via nodemon which will restart the server on file changes

## Adding npm packages

After adding the package to package.json by hand (running npm install on your host machine will not get the package inside the docker container) rebuild the server container with `docker-compose build server`
