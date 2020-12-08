const mongoose = require('mongoose');
const faker = require('faker');
const { PlaceModel } = require('./db/controllers/place.js');
const { ListingModel } = require('./db/controllers/listing.js');

mongoose.connect('mongodb://localhost/listings');

const pictureURLs = [
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/aaron-huber-oMOx_wV6mLQ-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/arcwind--OKp-rhSWE4-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/greg-rivers-rChFUMwAe7E-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/joseph-albanese-xx0oSB1YxRE-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/kara-eads-L7EwHkq1B2s-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/lindsey-lamont-zOFWHSN3oTQ-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/neonbrand-kdwahpWYfQo-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/outsite-co-R-LK3sqLiBw-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-binyamin-mellish-1396132.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-259588.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-259685.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-262405.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-saviesa-home-2089698.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-sebastian-s%C3%B8rensen-731082.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-tobias-bj%C3%B8rkli-2360673.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/randy-fath-csK5XPO87lI-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/roberto-nickson-tleCJiDOri0-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/toa-heftiba-FV3GConVSss-unsplash.jpg'
];

const morePlaces = () => {
  let list = [];
  let j = 0;
  while (j < 12) {
    const newPlace = new PlaceModel({
      listingID: Math.floor(Math.random() * 100),
      pictureURL: pictureURLs[Math.floor(Math.random() * pictureURLs.length)],
      locationName: faker.address.streetName(),
      liked: false,
      score: parseFloat(((Math.random() * 5) + 1).toFixed(2)),
      reviewCount: Math.floor(Math.random() * 200),
      roomType: faker.commerce.productName(),
      roomName: faker.commerce.productName(),
      bedCount: Math.floor(Math.random() * 2) + 1,
      costPerNight: Math.floor(Math.random() * 200) + 30,
    });
    list.push(newPlace);
    j += 1;
  }
  return list;
};

const create = (id) => {
  const newListing = new ListingModel({
    listingID: id,
    listingName: faker.address.streetName(),
    morePlacesID: morePlaces(),
  });
  ListingModel.create(newListing, (err) => {
    if (err) {
      console.log(err);
    } else {
      mongoose.disconnect();
    }
  });
};

module.exports = {
  morePlaces,
  create,
};