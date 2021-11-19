'use strict';

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionString = 'mongodb://mongodemo:secret@localhost:27017/admin';

MongoClient.connect(connectionString, {/*autoReconnect: true*/}, (err, database) => {
  if (err) {
    console.log('Failed to connect.', err.message);
    process.exit(1);
  }
  console.log('Connected');
  const admin = database.db('admin')

  const users = admin.collection('users');
  console.log(users);

  // SAVE USER
  // const user = {
  //   firstName: 'Beth',
  //   lastName:  'Dutton'
  // };

  // users.insertOne(user, err => {
  //   if (err) {
  //     console.log('Failed to insert user.', err.message);
  //     process.exit(1);
  //   }
  //   console.log(`User ${user.firstName} ${user.lastName} successfully inserted.`);
  //   // > User Beth Dutton successfully inserted.
  //   database.close();
  // });

  // QUERY USER

  users.find().toArray((err, documents) => {
    if (err) {
      console.log('Faild to find users.', err.message);
      process.exit(1);
    }

    console.log(documents);
    database.close();
  });
});
