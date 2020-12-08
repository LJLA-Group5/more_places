const fs = require('fs');
const path = require('path');

const writeRecs = fs.createWriteStream(
  path.join(__dirname, '/data/more_places_data.csv')
);
writeRecs.write('id, listingID, suggestionID, rank\n', 'utf8');

function writeTenMillionRecs(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  let listingID = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      listingID += 1;
      for (var l = 0; l < 12; l++) {
        id += 1;
        const listing = listingID;
        const morePlacesID = Math.floor((Math.random() * (10000000 - 1)) + 1);
        const rank = l + 1;
        const data = `${id}, ${listing}, ${morePlacesID}, ${rank}\n`;
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

writeTenMillionRecs(writeRecs, 'utf-8', () => {
  writeRecs.end();
});