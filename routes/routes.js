const express = require('express');
const router = express.Router();
const client = require('../config/connection');
const pg = require('pg');

router.get('/api/contacts', ((req, res) => {
  const query = "SELECT * FROM " + '"ContactInfo"' + "." + '"Contacts"';
  console.log(query);

  client.query(query, (err, response) => {
    if(err) {
      return res.json('There was an error')
    }
    res.json(response)
  })
}))

router.get('/search/:firstName/:lastName', ((req, res) => {
  console.log(req.params);
  const query="SELECT * FROM " + '"ContactInfo"' + "." + '"Contacts" WHERE firstname=' + "'" +  req.params.firstName + "'" + 'OR lastname='  + "'" +  req.params.lastName + "'";
  console.log(query);
  client.query(query, (err, response) => {
    if(err) {
      return res.json('There was an error')
    }
    res.json(response)
  })
}))
module.exports = router;