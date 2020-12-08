const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeListName = fs.createWriteStream(
  path.join(__dirname, '/data/list_data.csv')
);
writeListName.write('id, listName, userID\n', 'utf8');

function names(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    const word = faker.lorem.word();
    array.push(word);
  }
  return array;
}

const list = names(10);

function writeTenMillionListName(writer, encoding, callback) {
  let i = 100000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = list[Math.floor(Math.random() * (9 - 0))];
      const userID = Math.floor((Math.random() * (10000000 - 1)) + 1);
      const data = `${id}, ${name}, ${userID}\n`;
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

writeTenMillionListName(writeListName, 'utf-8', () => {
  writeListName.end();
});
