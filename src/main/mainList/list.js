import React,{useContext} from 'react';
import {ListContext} from '../index';

export default () => {
  const value = useContext(ListContext)
  if(value === undefined) {
    return (
      <div className="list-noData">
        暂无数据
      </div>
    )
  }else {
    return (
      <div className="list">
        {value.map(item => 
          (<div className="list-item">
            暂无数据
          </div>)
        )}
      </div>
    )
  }
}