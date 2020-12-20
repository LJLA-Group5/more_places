const faker = require('faker');
const fs = require('fs');
const path = require('path');

let fileNum = 0;
let numberoflistings = 1;
let writeListings;
let id = 5465465;

function writeTenMillionListings() {
  if (numberoflistings === 0) return writeListings.end();
  if (numberoflistings % 1 === 0) {
    fileNum += 1;
    writeListings = fs.createWriteStream(
      path.join(__dirname, `/data/test_data${fileNum}.csv`),
    );
    writeListings.write('bedCount, costPerNight, listingID, locationName, more_places, pictureURL, rank, reviewCount, roomName, roomType, score\n');
  }

  //for (var l=1; l < 13; l++) {
    const bedCount = Math.floor(Math.random() * 4) + 1;
    const costPerNight = Math.floor(Math.random() * 200) + 30;
    const locationName = faker.address.streetName();
    const morePlaces = Math.floor(Math.random() * 10000000 - 1) + 1;
    const pictureURL = `https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb${Math.floor((Math.random() * (999 - 1)) + 1)}.jpg`;
    const rank = 12;
    const reviewCount = Math.floor(Math.random() * 200);
    const roomName = faker.commerce.productName();
    const roomType = faker.commerce.productName();
    const score = parseFloat(((Math.random() * 5) + 1).toFixed(2));

    const data = `${bedCount}, ${costPerNight}, ${id}, ${locationName}, ${morePlaces}, ${pictureURL}, ${rank}, ${reviewCount}, ${roomName}, ${roomType}, ${score}\n`;
    const okay = writeListings.write(data);
    numberoflistings -= 1;
    id += 1;
    if (!okay) writeListings.once('drain', () => writeTenMillionListings());
    else writeTenMillionListings();
  }
//}

writeTenMillionListings();
