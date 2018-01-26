import React, { Component } from 'react';
import Item from './Item';

function MsgCard({ bgColor, text, content, EditHandler, DeleteHandler }) {
  const list = content && content.length && content.map((d, i) => {
    return (
      <Item indexColor={bgColor} key={i} index={i + 1} id={d._id} topic={d.name} status={d.status} Edit={EditHandler} Delete={DeleteHandler} />
    )
  }) || (<div className="no-data">无记录</div>);
  return (
    <div className="msgcard">
      <div className="title" style={{ background: bgColor }}>{text}</div>
      <div className="list">
        <ol style={{ color: bgColor, padding: '10px 0' }}>
          {list}
        </ol>
      </div>
    </div>
  );
}

export default MsgCard;