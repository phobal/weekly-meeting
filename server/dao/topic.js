const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topic = new Schema({
  id: String,
  name: {
    type: 'String',
    required: true,
    index: true,
  },
  type: String,
  status: Boolean,
});

mongoose.model('topic', topic);
const topicSchemaData = mongoose.model('topic');

exports.addTopic = (data, callback) => {
  const topic = new topicSchemaData();
  topic.name = data.name;
  topic.type = data.type;
  topic.status = false;
  topic.save((err) => {
    callback && callback(err)
  });
}

exports.removeTopic = (_id, callback) => {
  topicSchemaData.remove({ _id }, function (err) {
    callback(err);
  });
}

exports.modifyTopic = (data, callback) => {
  topicSchemaData.findOneAndUpdate({ _id: data._id }, data, (err, d) => {
    callback(err);
  })
}

exports.getAllTopic = (callback) => {
  topicSchemaData.find({}, (err, data) => {
    callback(err, data);
  });
}

exports.deleteAll = (callback) => {
  topicSchemaData.deleteMany({ name: /\*/ }, (err, data) => {
    callback(err, data);
  })
}

exports.deleteByType = (type, callback) => {
  topicSchemaData.deleteMany({ type }, (err, data) => {
    callback(err, data);
  })
}