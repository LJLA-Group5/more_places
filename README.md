# Project Name

> AirBnB

## Related Projects

  - https://github.com/spicy-boiz/reservations-service
  - https://github.com/spicy-boiz/photo-carousel-service
  - https://github.com/spicy-boiz/places-to-stay-service
  - https://github.com/spicy-boiz/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

"npm run server-prod" : runs the express server
"npm run react-dev" : compiles components and watches for changes

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## CRUD

  ## Create
    - Description: create a new recommendation for a given listing
    - Method: POST
    - Endpoint: '/api/:id/places'
    - Path params: { id: '1' }
    - Request body: { id: '100' }
    - Response object: status code 201

  ## Read
    - Description: return suggested listings (upto 12) for given listing
    - Method: GET
    - Endpoint: '/api/:id/places'
    - Path params: { id: '1'}
    - Request body: n/a
    - Response object:
```sh
[
    {
        "_id": "5fc6e1d8b36b73c0a9e31e77",
        "listingID": 1,
        "listingName": "Amely Cove",
        "morePlacesID": [
            {
                "_id": "5fc7fd2fd28b69dd4beee80e",
                "listingID": 82,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-262405.jpg",
                "locationName": "Sandy Motorway",
                "liked": false,
                "score": 4.06,
                "reviewCount": 102,
                "roomType": "Sleek Frozen Ball",
                "roomName": "Handmade Rubber Table",
                "bedCount": 1,
                "costPerNight": 164
            }, ...
        ],
        "__v": 0
    }
]
```

  ## Update
    - Description: update rank/order of recommendations for given listing
    - Method: PATCH
    - Endpoint: '/api/:id/places'
    - Path params: { id: '1'}
    - Request body: n/a *will update the rank/order of more_places associated with given listing*
    - Response object: status code 200

  ## Delete
    - Description: will delete a recommendation for a given listing
    - Method: DELETE
    - Endpoint:  '/api/:id/places'
    - Path params: { id: '100' }
    - Request body: n/a
    - Response object: status code