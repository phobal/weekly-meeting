const topic = require('../dao/topic');

const router = (app) => {
  app.get('/list', (req, res) => {
    topic.getAllTopic((err, data) => {
      if (err) {
        errorHandle(res, err);
      } else {
        successHandle(res, data);
      }
    });
  });

  app.post('/add', (req, res) => {
    const data = req.body;
    topic.addTopic(data, (err) => {
      if(err) {
        errorHandle(res, err);
      } else {
        successHandle(res);
      }
    });
  });
  app.delete('/remove', (req, res) => {
    const _id = req.query.id;
    topic.removeTopic(_id, (err) => {
      if (err) {
        errorHandle(res, err);
      } else {
        successHandle(res);
      }
    });
  });
  app.post('/update', (req, res) => {
    const data = req.body;
    topic.modifyTopic(data, (err) => {
      if (err) {
        errorHandle(res, err);
      } else {
        successHandle(res);
      }
    });
  });
  app.delete('/deleteall', (req, res) => {
    topic.deleteAll((err) => {
      if(err) {
        errorHandle(res);
      } else {
        successHandle(res);
      }
    })
  });
  app.delete('/deleteByType', (req, res) => {
    const type = req.query.type;
    topic.deleteByType(type, (err) => {
      if(err) {
        errorHandle(res);
      } else {
        successHandle(res);
      }
    })
  })
}

function errorHandle(res, err) {
  res.json({
    success: false,
    data: '',
    message: err
  })
}
function successHandle(res, data) {
  res.json({
    success: true,
    data: data || '',
    message: ''
  })
}

module.exports = router;