const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/flowchain?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let con;
module.exports = {
  connect: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      con = db.db('nftmarketflowdb');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getConnection: function () {
    return con;
  },

  getCollection: function (collectionName) {
    return con.collection(collectionName);
  },
};
