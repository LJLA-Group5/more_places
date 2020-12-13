const express = require('express');
const listingController = require('../../db/controllers/listing.js');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1' });

client.connect((err, result) => {
  console.log('index: cassandra conneted');
});

// create a route handler
const router = express.Router();

//create
router.route('/api/create')
  .post((req,res) => {
    console.log(req.body);
    res.status(201).send(req.body);
  });

//read
router.route('/api/:id/places')
  .get((req, res) => {
    console.log(req.body)
    const { id } = req.params;
    client.execute(`SELECT * FROM listings.more_places_by_listing WHERE listingID = ${id}`,[], (err, data) => {
      if (err) {
        res.status(404).send({ msg: err });
      } else {
        res.status(200).json([{"morePlacesID": data.rows }]);
      }
    });
  });

//old routing to mongoDB
router.route('/api/:id/places/old')
  .get((req, res) => {
    console.log(req.body)
    const { id } = req.params;
    listingController.findOne(id, (err, data) => {
      if (err) {
        res.status(404).send({ msg: err });
      } else {
        res.status(200).json(data);
      }
    });
  });

//update
router.route('/api/:id/places')
  .patch((req, res) => {
    const { id } = req.params;
    listingController.updateOne(id, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('updated');
      }
    });
  });

//delete

module.exports = router;
