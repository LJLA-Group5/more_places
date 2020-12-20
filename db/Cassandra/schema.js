//details associated with listing
CREATE KEYSPACE listings WITH replication = {‘class’:
  ‘SimpleStrategy’, ‘replication_factor’ : 1};

CREATE TYPE listings.details (
  pictureURL text,
  locationName text,
  score varint,
  reviewCount varint,
  roomType text,
  roomName text,
  bedCount varint,
  costPerNight varint,
);

//creates relationship between a listing and more places recommendations for that listing
CREATE TABLE listings.more_places_by_listing (
  listingID int,
  more_places int,
  places_detail frozen<details>,
  rank int,
  PRIMARY KEY ((listingID), rank)
  AND CLUSTERING ORDER BY (rank ASC)
  WITH comment = 'find all recommendated listing by listingID'
);

//creates users. reuse postgres data
CREATE TABLE listings.users (
  userID int,
  name text,
  PRIMARY KEY (ID)
  WITH comment = 'find a user from user ID'
);

//list names for a given user. reuse postgres data
//look into types
CREATE TABLE listings.listNames_by_user (
  listID int,
  listName text,
  userID int,
  PRIMARY KEY (userID)
  WITH comment = 'find all lists for a given user'
);

//tells if a listing is in a given listID
//listID are unique for a given user+listName
CREATE TABLE listings.listings_list (
  userID int,
  listID int,
  listingID int,
  places_detail frozen<details>,
  PRIMARY KEY (listID)
  WITH comment = 'find all listings in a given list'
);