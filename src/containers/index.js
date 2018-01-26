import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import 'ress/dist/ress.min.css';

// import relative path
import Home from './Home';
import NotFound from './NotFound';
import topicStore from '../mobx/TopicStore';
import modalStore from '../mobx/ModalStore';

window.topicStore = topicStore;
window.modalStore = modalStore;

const Main = () => (
  <Provider topicStore={topicStore} modalStore={modalStore}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Main;
