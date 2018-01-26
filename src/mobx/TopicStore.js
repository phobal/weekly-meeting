import { observable, action } from 'mobx';
import { List, Add, Remove, Update } from '../services/TopicService';
class TopicStore {
  @observable topics = [];

  @action getAllTopics = () => {
    const that = this;
    List().then(data => {
      that.topics = data.data.data;
    });
  }
  @action addTopic = (data, callback) => {
    Add(data).then((data) => {
      if (data.data.success) {
        this.getAllTopics();
        callback && callback();
      }
    })
  }

  @action removeTopic = (id, callback) => {
    Remove(id).then((data) => {
      if(data.data.success) {
        this.getAllTopics();
        callback && callback();
      }
    })
    // this.getAllTopics();
  }

  @action updateTopic = (data, callback) => {
    Update(data).then((data) => {
      if(data.data.success) {
        this.getAllTopics();
        callback && callback();
      }
    })
  }
}

export default new TopicStore();