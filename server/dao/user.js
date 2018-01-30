const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: 'String',
    required: true,
    minlength: 6,
  },
  avator: String,
});

mongoose.model('user', user);

const UserSchemaData = mongoose.model('user');

exports.addUser = function(data, callback) {
  const user = new UserSchemaData();
  const { name, avator } = data;
  user.name = name;
  user.avator = avator;
  user.save(user, (err)=> {
    callback && callback(err);
  });
}
