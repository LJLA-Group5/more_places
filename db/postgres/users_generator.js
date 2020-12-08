const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(
  path.join(__dirname, '/data/users_data.csv')
);
writeUsers.write('id, name\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.internet.userName();
      const data = `${id}, ${name}\n`;
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

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});