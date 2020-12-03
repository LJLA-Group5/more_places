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
    * Method: post
    * Endpoint: '/api/create'
    * Path params: { id: '100'}
    * Request body: *new listing object*
    * Response object: status code 201

  ## Read
    * Method: get
    * Endpoint: '/api/:id/places'
    * Path params: { id: '1'}
    * Request body: n/a
    * Response object:
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
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee80f",
                "listingID": 39,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-259588.jpg",
                "locationName": "Steuber Trafficway",
                "liked": false,
                "score": 2.37,
                "reviewCount": 70,
                "roomType": "Rustic Cotton Chips",
                "roomName": "Unbranded Fresh Fish",
                "bedCount": 1,
                "costPerNight": 123
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee810",
                "listingID": 0,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/neonbrand-kdwahpWYfQo-unsplash.jpg",
                "locationName": "Horacio Light",
                "liked": false,
                "score": 3.97,
                "reviewCount": 30,
                "roomType": "Incredible Granite Sausages",
                "roomName": "Intelligent Concrete Pants",
                "bedCount": 2,
                "costPerNight": 202
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee811",
                "listingID": 21,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/outsite-co-R-LK3sqLiBw-unsplash.jpg",
                "locationName": "Eldora Squares",
                "liked": false,
                "score": 5.77,
                "reviewCount": 55,
                "roomType": "Generic Granite Computer",
                "roomName": "Unbranded Soft Salad",
                "bedCount": 1,
                "costPerNight": 45
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee812",
                "listingID": 68,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/joseph-albanese-xx0oSB1YxRE-unsplash.jpg",
                "locationName": "O'Reilly Causeway",
                "liked": false,
                "score": 5.16,
                "reviewCount": 187,
                "roomType": "Ergonomic Fresh Chair",
                "roomName": "Incredible Steel Computer",
                "bedCount": 1,
                "costPerNight": 97
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee813",
                "listingID": 20,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/lindsey-lamont-zOFWHSN3oTQ-unsplash.jpg",
                "locationName": "Myra Viaduct",
                "liked": false,
                "score": 3.42,
                "reviewCount": 188,
                "roomType": "Awesome Soft Hat",
                "roomName": "Ergonomic Soft Bike",
                "bedCount": 2,
                "costPerNight": 196
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee814",
                "listingID": 53,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/neonbrand-kdwahpWYfQo-unsplash.jpg",
                "locationName": "O'Reilly Rue",
                "liked": false,
                "score": 2.19,
                "reviewCount": 93,
                "roomType": "Practical Plastic Mouse",
                "roomName": "Unbranded Metal Car",
                "bedCount": 2,
                "costPerNight": 130
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee815",
                "listingID": 86,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/toa-heftiba-FV3GConVSss-unsplash.jpg",
                "locationName": "Dooley Field",
                "liked": false,
                "score": 4.75,
                "reviewCount": 115,
                "roomType": "Refined Steel Chips",
                "roomName": "Refined Plastic Ball",
                "bedCount": 1,
                "costPerNight": 43
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee816",
                "listingID": 59,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/aaron-huber-oMOx_wV6mLQ-unsplash.jpg",
                "locationName": "Swift Harbor",
                "liked": false,
                "score": 1.93,
                "reviewCount": 133,
                "roomType": "Intelligent Metal Pizza",
                "roomName": "Intelligent Concrete Chicken",
                "bedCount": 2,
                "costPerNight": 224
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee817",
                "listingID": 49,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-262405.jpg",
                "locationName": "Connelly Prairie",
                "liked": false,
                "score": 5.37,
                "reviewCount": 156,
                "roomType": "Unbranded Rubber Keyboard",
                "roomName": "Intelligent Cotton Soap",
                "bedCount": 2,
                "costPerNight": 207
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee818",
                "listingID": 92,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/joseph-albanese-xx0oSB1YxRE-unsplash.jpg",
                "locationName": "Haley Trail",
                "liked": false,
                "score": 3.16,
                "reviewCount": 101,
                "roomType": "Handmade Concrete Chicken",
                "roomName": "Gorgeous Cotton Tuna",
                "bedCount": 2,
                "costPerNight": 155
            },
            {
                "_id": "5fc7fd2fd28b69dd4beee819",
                "listingID": 55,
                "pictureURL": "https://hrsf131-fec.s3-us-west-1.amazonaws.com/toa-heftiba-FV3GConVSss-unsplash.jpg",
                "locationName": "Danika Station",
                "liked": false,
                "score": 5.46,
                "reviewCount": 112,
                "roomType": "Refined Soft Computer",
                "roomName": "Unbranded Cotton Sausages",
                "bedCount": 2,
                "costPerNight": 98
            }
        ],
        "__v": 0
    }
]
```

  ## Update
    * Method: patch
    * Endpoint: '/api/:id/places'
    * Path params: { id: '1'}
    * Request body: n/a *will update more_places array with a list of new places*
    * Response object: status code 200

  ## Delete
    * Method: delete
    * Endpoint:  '/api/:id/places'
    * Path params: { id: '100' }
    * Request body: n/a
    * Response object: status code