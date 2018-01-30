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

exports.getAllUser = function(callback) {
  UserSchemaData.find({}, (err, data) => {
    callback && callback(err, data);
  });
}

exports.removeUserById = function(_id, callback) {
  UserSchemaData.findByIdAndRemove({ _id }, (err) => {
    callback && callback(err);
  })
}

exports.modifyUser = function(data, callback) {
  const { _id } = data;
  UserSchemaData.findByIdAndUpdate({ _id }, data, (err) => {
    callback && callback(err);
  });
}