import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Button, Image, Modal, Form } from 'semantic-ui-react'
import Header from './components/Header.js';
import Content from './components/Content.js';
import './Home.less';

@inject('topicStore', 'modalStore')
// @inject('modalStore')
@observer
export default class Home extends Component {
  static propTypes = {
    topicStore: PropTypes.object,
    modalStore: PropTypes.object,
  }
  state = {
    id: null,
    name: '',
    type: 'design',
  }
  componentWillMount() {
    const {
      topicStore: { topics, getAllTopics, addTopic, removeTopic }
    } = this.props;
    getAllTopics();
  }
  openModal() {
    const {
      modalStore: {
        Open
      }
    } = this.props;
    this.setState({ id: null });
    Open();
  }
  onCloseModal() {
    const {
      modalStore: {
        Close
      }
    } = this.props;
    Close();
    this.setState({
      id: null,
      name: '',
      type: 'design'
    })
  }
  onSubmit() {
    const { id, name, type } = this.state;
    const that = this;
    const {
      topicStore: {
        addTopic,
        updateTopic,
      },
      modalStore: {
        Close
      }
    } = this.props;
    if (!id) {
      addTopic({
        name,
        type,
      }, () => {
        Close();
        that.reset();
      });
    } else {
      updateTopic({
        id,
        name,
        type,
      }, () => {
        Close();
        that.reset();        
      })
    }
  }
  reset() {
    this.setState({
      id: null,
      name: '',
      type: 'design'
    })
  }
  onChange(e, { name, value }) {
    this.setState({ [name]: value })
  }
  EditHandler(id) {
    const {
      topicStore: { topics, getAllTopics, addTopic, removeTopic },
      modalStore: { Open },
    } = this.props;
    const data = topics.find(d => d._id === id);
    this.setState({
      id,
      name: data.name,
      type: data.type,
    });
    Open(true);
  }
  DeleteHandler(id) {
    const {
      topicStore: { removeTopic },
    } = this.props;
    removeTopic(id);
  }
  render() {
    const {
      topicStore: { topics, getAllTopics, addTopic, removeTopic },
      modalStore: { open },
    } = this.props;
    const options = [
      { key: '1', text: '设计类', value: 'design' },
      { key: '2', text: '前端类', value: 'frontend' },
      { key: '3', text: '闲聊类', value: 'chatting' },      
    ]
    const { name, type } = this.state;
    return (
      <div id="pageHome">
        {/* <Header /> */}
        <Content topics={topics.toJS()} DeleteHandler={this.DeleteHandler.bind(this)} EditHandler={this.EditHandler.bind(this)} />
        <div className="plus-icon" onClick={this.openModal.bind(this)}>
          <Icon name="plus" size="big" />
        </div>
        <Modal open={open}>
          <Modal.Header>话题</Modal.Header>
          <Modal.Content>
            <Form >
              <Form.Field>
                <label>话题内容</label>
                <Form.Input name="name" value={name} onChange={this.onChange.bind(this)} />
              </Form.Field>
              <Form.Field>
                <label>类型</label>
                <Form.Select options={options} name="type" value={type} placeholder='设计类' onChange={this.onChange.bind(this)} />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.onCloseModal.bind(this)}>取消</Button>
            <Button positive icon='checkmark' labelPosition='right' content='确认' onClick={this.onSubmit.bind(this)} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
