import React from 'react';
import FontAwesome from 'react-fontawesome'
import {DropdownButton} from '../../components/dropdown-select';


export default () => {
  const dropDownList = [{"name" : "全部状态", id : 0, checked: true},
                        {"name" : "未开始", id : 1, checked: false},  
                        {"name" : "竞拍中", id : 2, checked: false},
                        {"name" : "已结束", id : 3, checked: false},
                        ];
  const dropDownToggle = "全部状态";
  return (
    <div className="listHead">
      <div className="auction-button button-blue">
        <span>
          <FontAwesome name="plus" />&nbsp;&nbsp;创建竞拍
        </span>
      </div>
      <div className="auction-dropdown">
        <DropdownButton list={dropDownList} toggle={dropDownToggle} />
      </div>
    </div>
  )
}