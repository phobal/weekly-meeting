import React, { Component } from 'react';
import _ from 'lodash';
import MsgCard from './MsgCard';

export default class Content extends Component {
  render() {
    const { topics } = this.props; 
    const design = _.filter(topics, d => d.type === 'design');
    const frotend = _.filter(topics, d => d.type === 'frotend');
    const chatting = _.filter(topics, d => d.type === 'chatting');        
    return (
      <div className="content">
        <div className="design">
          <MsgCard bgColor="#f3a536" text="设计类" content={design} DeleteHandler={this.props.DeleteHandler.bind(this)} EditHandler={this.props.EditHandler.bind(this)} />
        </div>
        <div className="frotend">
          <MsgCard bgColor="#828fdf" text="前端类" content={frotend} DeleteHandler={this.props.DeleteHandler.bind(this)} EditHandler={this.props.EditHandler.bind(this)} />
        </div>
        <div className="chatting">
          <MsgCard bgColor="#cfb8f2" text="闲聊类" content={chatting} DeleteHandler={this.props.DeleteHandler.bind(this)} EditHandler={this.props.EditHandler.bind(this)} />
        </div>
      </div>
    );
  }
}
