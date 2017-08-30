const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID('59a665a633594ded427987cd') },
  //   { $set: { completed: true } },
  //   { returnOriginal: false })
  //   .then(result => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('59a4fb44cafb5422b878bbc0') },
    { $set: { name: 'Mary' }, $inc: { age: 1 }},
    { returnOriginal: false }
  )
    .then(result => {
      console.log('Updated document', result);
    }).catch(error => console.log('error', error));

  // db.close();
});
