const topic = require('../dao/topic');
const user = require('../dao/user');
const superagent = require('superagent');

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
      if (err) {
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
      if (err) {
        errorHandle(res);
      } else {
        successHandle(res);
      }
    })
  });
  app.delete('/deleteByType', (req, res) => {
    const type = req.query.type;
    topic.deleteByType(type, (err) => {
      if (err) {
        errorHandle(res);
      } else {
        successHandle(res);
      }
    })
  });

  // USer

  app.post('/user/add', (req, res) => {
    const data = req.body;
    user.addUser(data, (err) => {
      if (err) {
        errorHandle(res, err);
      } else {
        successHandle(res);
      }
    })
  })
  app.get('/user/list', (req, res) => {
    user.getAllUser((err, data) => {
      if (err) {
        errorHandle(res, err);
      } else {
        successHandle(res, data);
      }
    });
  });
  app.delete('/user/remove', (req, res) => {
    const { _id } = req.query;
    user.removeUserById(_id, (err) => {
      if (err) {
        errorHandle(err, res);
      } else {
        successHandle(res);
      }
    })
  });
  app.post('/user/update', (req, res) => {
    const data = req.body;
    user.modifyUser(data, (err) => {
      if (err) {
        errorHandle(err, res);
      } else {
        successHandle(res);
      }
    });
  });

  app.get('/gethothouse', (req, res) => {
    // fetch('http://192.168.26.124:1234/').then(function(data){
    //   console.log(data);
    // })
    superagent.get('http://192.168.26.124:1234/').end((err, resp) => {
      // console.log(resp.text);
      if (err) {
        errorHandle(err, resp);
      } else {
        // successHandle(resp.text);
        res.json({
          success: true,
          data: resp.text || '',
          message: ''
        })
      }
    })
  });
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