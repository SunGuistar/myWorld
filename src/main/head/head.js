import React from 'react';

export default (props) => {
  return (
    <div className="head">
      <div className="headTitle">
        营销中心 - <b>{props.activityName}</b>
      </div>
    </div>
  )
}