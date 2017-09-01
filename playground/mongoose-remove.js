const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({__id: '59a8e45e15404f61d5d2e8dd'}).then(todo => {
  
});

Todo.findByIdAndRemove('59a8e45e15404f61d5d2e8dd').then(todo => {
  console.log(todo);
});
