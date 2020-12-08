const faker = require('faker');
const fs = require('fs');
const path = require('path');
//const csvWriter = require('csv-write-stream');
//const writer = csvWriter();

const writeListings = fs.createWriteStream(
  path.join(__dirname, '/data/listings_data.csv'),
);

writeListings.write('bedCount, costPerNight, listingID, locationName, more_places, pictureURL, rank, reviewCount, roomName, roomType, score\n', 'utf8');

function writeTenMillionListings(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for (var l=0; l < 12; l++) {
        const bedCount = Math.floor(Math.random() * 4) + 1;
        const costPerNight = Math.floor(Math.random() * 200) + 30;
        const locationName = faker.address.streetName();
        const morePlaces = Math.floor(Math.random() * 10000000 - 1) + 1;
        const pictureURL = `https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb${Math.floor((Math.random() * (999 - 1)) + 1)}.jpg`;
        const rank = l;
        const reviewCount = Math.floor(Math.random() * 200);
        const roomName = faker.commerce.productName();
        const roomType = faker.commerce.productName();
        const score = parseFloat(((Math.random() * 5) + 1).toFixed(2));
        const data = `${bedCount}, ${costPerNight}, ${id}, ${locationName}, ${morePlaces}, ${pictureURL}, ${rank}, ${reviewCount}, ${roomName}, ${roomType}, ${score}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionListings(writeListings, 'utf-8', () => {
  writeListings.end();
});
