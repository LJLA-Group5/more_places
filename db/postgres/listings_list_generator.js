const fs = require('fs');
const path = require('path');

const writeFavorite = fs.createWriteStream(
  path.join(__dirname, '/data/listing_list_data.csv')
);
writeFavorite.write('id, listID, listingID\n', 'utf8');

function writeTenMillionFavorite(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const listID = Math.floor((Math.random() * (10000000 - 1)) + 1);
      const listingID = Math.floor((Math.random() * (10000000 - 1)) + 1);
      const data = `${id}, ${listID}, ${listingID}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionFavorite(writeFavorite, 'utf-8', () => {
  writeFavorite.end();
});
