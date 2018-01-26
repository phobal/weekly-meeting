import React, { Component } from 'react';

export default class Item extends Component {
  state = {
    showButton: false
  }
  onClickItem() {
    this.setState({
      showButton: !this.state.showButton
    });
  }
  render() {
    const { index, indexColor, id, topic, status } = this.props;
    const { showButton } = this.state;
    return (
      <li className="item" onClick={this.onClickItem.bind(this)}>
        <div className="item-content">
          <span style={{ color: indexColor }}>{`${index}:   `}</span>
          <span>{topic}</span>
        </div>
        <div className="status" style={{ transform: showButton ? 'translate(86px)' : 'translate(0)' }}>{status ? '已选' : '未选'}</div>
        <div className="operation" style={{ display: showButton ? 'flex' : 'none' }}>
          <div onClick={this.props.Edit.bind(this, id)}>{`编辑 |`}</div>
          <div onClick={this.props.Delete.bind(this, id)} style={{ color: 'red', paddingLeft: '5px' }}>删除</div>
        </div>
      </li>
    )
  }
}