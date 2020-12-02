const express = require('express');
const listingController = require('../../db/controllers/listing.js');

// create a route handler
const router = express.Router();

//create

//read
router.route('/api/:id/places')
  .get((req, res) => {
    const { id } = req.params;
    listingController.findOne(id, (err, data) => {
      if (err) {
        console.log(err);
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
