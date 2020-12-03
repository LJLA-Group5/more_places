DROP SCHEMA airbnb CASCADE;

CREATE SCHEMA airbnb;


CREATE TABLE listings (
  listingID serial PRIMARY KEY,
  pictureURL VARCHAR(200) NOT NULL,
  locationName VARCHAR(200) NOT NULL,
  liked BOOLEAN,
  score INT NOT NULL,
  reviewCount INT NOT NULL,
  roomType VARCHAR(200) NOT NULL,
  roomName VARCHAR(200) NOT NULL,
  bedCount INT NOT NULL,
  costPerNight INT NOT NULL,
);

CREATE TABLE more_places (
  ID serial PRIMARY KEY,
  listingID INT references listings(listingID),
  suggestionID INT references listings(listingID),
  rank INT,
);

