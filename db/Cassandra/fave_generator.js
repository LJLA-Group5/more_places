const faker = require('faker');
const fs = require('fs');
const path = require('path');

let fileNum = 0;
let numberoflistings = 10000000;
let writeListings;
let id = 1;

function names(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    const word = faker.lorem.word();
    array.push(word);
  }
  return array;
}

const list = names(10);

function writeTenMillionListings() {
  if (numberoflistings === 0) return writeListings.end();
  if (numberoflistings % 10000000 === 0) {
    fileNum += 1;
    writeListings = fs.createWriteStream(
      path.join(__dirname, `/data/faves_data${fileNum}.csv`),
    );
    writeListings.write('bedCount, costPerNight, listID, listName, listingID, locationName, pictureURL, reviewCount, roomName, roomType, score, userID\n');
  }

  const bedCount = Math.floor(Math.random() * 4) + 1;
  const costPerNight = Math.floor(Math.random() * 200) + 30;
  const listingID = Math.floor((Math.random() * (10000000 - 1)) + 1);
  const listName = list[Math.floor(Math.random() * (9 - 0))];
  const locationName = faker.address.streetName();
  const pictureURL = `https://lilykongbundles.s3.us-east-2.amazonaws.com/SDC_photos/airbnb${Math.floor((Math.random() * (999 - 1)) + 1)}.jpg`;
  const reviewCount = Math.floor(Math.random() * 200);
  const roomName = faker.commerce.productName();
  const roomType = faker.commerce.productName();
  const score = parseFloat(((Math.random() * 5) + 1).toFixed(2));
  const userID = Math.floor((Math.random() * (10000000 - 1)) + 1);
  const listID = userID+listName;

  const data = `${bedCount}, ${costPerNight}, ${listID}, ${listName}, ${listingID}, ${locationName}, ${pictureURL}, ${reviewCount}, ${roomName}, ${roomType}, ${score}, ${userID}\n`;
  const okay = writeListings.write(data);
  numberoflistings -= 1;
  id += 1;
  if (!okay) writeListings.once('drain', () => writeTenMillionListings());
  else writeTenMillionListings();
}

writeTenMillionListings();
