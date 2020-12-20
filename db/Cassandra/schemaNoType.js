//details associated with listing
CREATE KEYSPACE listings WITH replication = {'class':
  'SimpleStrategy', 'replication_factor' : 1};

//creates relationship between a listing and more places recommendations for that listing
CREATE TABLE listings.more_places_by_listing (
  bedCount varint,
  costPerNight varint,
  listingID int,
  locationName text,
  more_places int,
  pictureURL text,
  rank int,
  reviewCount varint,
  roomName text,
  roomType text,
  score text,
  PRIMARY KEY ((listingID), rank)
);
//WITH comment = 'find all recommendated listing by listingID'

//creates users
CREATE TABLE listings.users (
  name text,
  userID int,
  PRIMARY KEY (userID)
);
//WITH comment = 'find a user from user ID'

//list names for a given user. reuse postgres data
//look into types

//WITH comment = 'find all lists for a given user'

//tells if a listing is in a given listID
//listID are unique for a given user+listName
CREATE TABLE listings.user_faves (
  bedCount varint,
  costPerNight varint,
  listID text,
  listName text,
  listingID int,
  locationName text,
  pictureURL text,
  reviewCount varint,
  roomName text,
  roomType text,
  score text,
  userID int,
  PRIMARY KEY (listID)
);
//WITH comment = 'find all listings in a given list'