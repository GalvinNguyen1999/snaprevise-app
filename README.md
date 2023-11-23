![Logo](https://mail.google.com/mail/u/0?ui=2&ik=5268df2d64&attid=0.1.1&permmsgid=msg-f:1782419210384915750&th=18bc6cd403d33d26&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-XsGEpN2hYdC7dzh9mgREl7OqhuTWwY0xgnTlZgAYPIHl1haB1jYvJnk4BLCLhfzq-l9Vbs-VnjmECA2VDTbqEg7_p8kGrIx0-KB0xGZaEp3-L0ktPsNcp6tQ&disp=emb)

# Snaprevise App Location

Get information about schools, hospitals, parks, supermarkets. Includes name, location, address, type, area around 20km radius from selected location.
## Getting Started

Instructions on how to install and run the project locally.

### Prerequisites

To install and run the project, you need:

- [Node.js](https://nodejs.org/) (version 18.x)
- npm (usually comes with Node.js)
- [Docker](https://www.docker.com/) (if you want to run in a Docker environment)

## Run Locally

Clone the project

```bash
  git clone https://github.com/GalvinNguyen1999/snaprevise-app.git
```

Go to the project directory

```bash
  cd snaprevise-app
```

Install dependencies

```bash
  npm install
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`APP_PORT=8017`

`APP_HOST='localhost'`

`GOOGLE_KEY=''`

`GOOGLE_URL='https://maps.googleapis.com/maps/api/place/nearbysearch/json'`

`BUILD_MODE='dev'`

`JWT_SECRET='snaprevise'`

`POSTGRESQL_HOST='snaprevise'`

`POSTGRESQL_USER='snaprevise'`

`POSTGRESQL_NAME='snaprevise'`

`POSTGRESQL_PASSWORD='snaprevise123'`

`POSTGRESQL_PORT=5432`

`DIALECT='postgres'`


If you want to use Docker Compose, a docker-compose.yml file is provided. Run the following command:

```bash
  docker-compose up -d
```

Start the server

```bash
  npm run dev
```
## API Reference

#### Sign Up

```bash
  curl --location 'http://localhost:8017/v1/auth/sign-up' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'name=normaluser' \
  --data-urlencode 'password=P@ssword123'
```

#### Sign In

```bash
   curl --location 'http://localhost:8017/v1/auth/sign-in' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'name=normaluser' \
  --data-urlencode 'password=P@ssword123'
```
