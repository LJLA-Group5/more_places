DROP SCHEMA airbnb CASCADE;

CREATE SCHEMA airbnb;


CREATE TABLE listings (
  listingID INT PRIMARY KEY,
  pictureURL VARCHAR(200) NOT NULL,
  locationName VARCHAR(200) NOT NULL,
  score VARCHAR(10) NOT NULL,
  reviewCount INT NOT NULL,
  roomType VARCHAR(200) NOT NULL,
  roomName VARCHAR(200) NOT NULL,
  bedCount INT NOT NULL,
  costPerNight INT NOT NULL
);

CREATE TABLE more_places_by_listing (
  ID INT PRIMARY KEY,
  listingID INT references listings(listingID),
  suggestionID INT references listings(listingID),
  rank INT
);

CREATE TABLE users (
  ID INT PRIMARY KEY,
  name VARCHAR(40) NOT NUll
);

CREATE TABLE listNames_by_user (
  ID INT PRIMARY KEY,
  listName VARCHAR(100) NOT NULL,
  userID text references users(ID)
);

CREATE TABLE listings_list (
  ID INT PRIMARY KEY,
  listID INT references list(ID),
  listingID INT references listings(listingID)
);
