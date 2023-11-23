
![Logo](https://ci3.googleusercontent.com/mail-img-att/AM67uIPH9uzKJ8DuHrDXuhulAfWMSMAELuW3Fma22QNiEwUgNLtTWGPK1nHvQcmqvGbVQn7kAZNCe7YbDwKlYsHQw6xB6zTfVBSEpQ-2x-VEUcd6_BPVaofY93qi2EUqnZc0QX-Dwac8liE4pF9vOIW2LeefB1vANhXM72VsDwHBLqDQGgd9hvt1oMjzEuiow7NFzGD6aJmMe8iPVzGf0fC1OZHPVo3MMgB1qC9jQw_KKglOVDfCO_aA30E-DJiMRDNL__nvPPW7o67HWVf0_sB3yJ-IfHwpea4AKsD1dPDHZVJeuDMOOCpfuRWzBpfqKkXTpWKCdivg8OzIgLOtnsQ0CwuYFYqGiHGnGSGlhVfGIfE8A9Qjg3cQyh5DVktISJRCw8Pe2YS2nxcYYoRWFSGh026CKn4F-h38MoR4z8KMk-IhMHfUUGXgG571TGJZvvCGmjGQzCXs3uS3lwHZXDh-BJ5yXWxYgxvlv13XFSB59Hwj-Eqj5Zb0vLVlWr0EyqbLowC7c3Oi7g0JfIhkzAF-TXeMiSMMgWpdDJf9vgEmy6Wh2xqz9KxUZEN7mqYUzEzI2iIFG3MjMLFLlVyB9qkhowFAXGWvvqP6CCr7ace2o03Jwo4w8R8di89Xc6JadO3ccvBOd71YMM8JD5MUdUe16d0aNoJGl2D13SNaeNFWo19uIyy-g8ceDoZPcPOzq6mx5CQJVb1qJpB7GJ5sNp5tn4P8e2smNmK5fnmHcStpE3Bl9nd3D0mJX9JNQ8hl_KeFc_s6yTndQycgUqTdEDwARqMYMUscX74nr9EoVJzwPOeX6p0LMoWr4LY1ZnhKE_iyLIhWQaebCXHZgeFfqIoZQ3iAF9IW-SS3NfAKfQNMCOcL-lgzt4Qw56EUrQcLvl5o-trUD0DQ4Kylz8kcGSnymLIzm09r1sqK9qiER91stJiVjKORUeiqUiZd6QVCDPZujeQILsaHRmPRQgpdR0dcU3NqffwcgzDwr_bN1eO8nX-13rynFJOnyNG46CzyQSh16pyr1-5nGOIemHvPnz7ITYMbBwgCIQJt9QHXHqooc3dh6wQG2xt9ajFhoQ=s0-l75-ft)


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

`POSTGRESQL_HOST=''`

`POSTGRESQL_USER=''`

`POSTGRESQL_NAME=''`

`POSTGRESQL_PASSWORD=''`

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

#### Create User

```bash
  curl --location 'http://localhost:8017/v1/auth/sign-up' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'name=normaluser' \
  --data-urlencode 'password=P@ssword123'
```
