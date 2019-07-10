const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const dbName = 'moviesdb';
const url = 'mongodb://localhost:27017/' + dbName;

MongoClient.connect(url, (err, dbs) => {
    if (err) throw err;
    router.get('/movies', async (req, res) => {
        const db = dbs.db(dbName);
        const collectionName = 'movies';
        const data = await db.collection(collectionName).find({}).toArray();
        if(data.length > 0){
            res.send(data);
        }
    })
});


module.exports = router;