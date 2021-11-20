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

  // QUERY ALL USER
  users.find().toArray((err, documents) => {
    if (err) {
      console.log('Faild to find users.', err.message);
      process.exit(1);
    }
  
    console.log(documents);
    database.close();
  });

  // QUERY ALL USERs WHIT lastName Dutton EXCLUDE firstName Beth
  // users.find({
  //   $and: [ 
  //     { lastName: 'Dutton' }, 
  //     { firstName: { $ne: 'Beth' } }
  //   ]
  // }).toArray((err, documents) => {
  //   if (err) {
  //     console.log('Faild to find users.', err.message);
  //     process.exit(1);
  //   }

  //   console.log(documents);
  //   database.close();
  // });

  // users.findOne({
  //   lastName: 'Dutton'
  // }, (err, document) => {
  //   if (err) {
  //     console.log('Faild to find user.', err.message);
  //     process.exit(1);
  //   }

  //   console.log(document);
  //   database.close();
  // });

  // UPDATE ALL (Janes)
  // users.updateMany({ firstName: 'Jane' }, { $set: { lastName: 'Dutton' }}, err => {
  //   if (err) {
  //     console.log('Failed to update.', err.message);
  //     process.exit(1);
  //   }

  //   console.log('Update Successfull!');
  //   database.close();
  // });

});