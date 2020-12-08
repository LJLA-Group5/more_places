const mongoose = require('mongoose');
const { placeSchema } = require('./place.js');
const helper = require('../../helper.js');

const listingSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  listingName: String,
  morePlacesID: [placeSchema], // an array of objects in carousel
});
// 100 unique listings, each rendering a unique carousel
// make moreplacesID an array of objects

const ListingModel = mongoose.model('Listing', listingSchema);

// method to retrieve a listing
const findOne = (id, callback) => {
  ListingModel.find({ listingID: id }).exec(callback);
};

//function to update more places to stay for a given listing
const updateOne = (id, callback) => {
  ListingModel.updateMany(
    { listingID: id },
    { $set: { morePlacesID: helper.morePlaces() } }
  ).exec(callback);
};

//function to delete a listing

//function to create a listing
const createOne = () => {

}

module.exports = {
  ListingModel,
  findOne,
  updateOne,
};
