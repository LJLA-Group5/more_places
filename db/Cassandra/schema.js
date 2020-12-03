CREATE TABLE listings (
  listingID uuid,
  pictureURL text,
  locationName text,
  liked BOOLEAN,
  score varint,
  reviewCount varint,
  roomType text,
  roomName text,
  bedCount varint,
  costPerNight varint,
  PRIMARY KEY (listingID)
)

// CREATE TABLE more_places (
//   listingID uuid,
//   more_places SET<INT>,
//   PRIMARY KEY (listingID)
// )

CREATE TABLE more_places (
  listingID int,
  more_places int,
  rank int,
  PRIMARY KEY ((listingID, more_places), rank)
)