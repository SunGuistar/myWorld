import React, {useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const ListItem = props => {
  const [list, setList] = useState(props.list);
  const [id, setId] = useState(0);
  const setToggle = props.changeToggle;
  
  useEffect( () => {
    let tmpList = list;
    let toggle = '';
    for(let i = 0; i < tmpList.length; i++) {
      if(tmpList[i].id === id) {
        tmpList[i].checked = true;
        toggle = tmpList[i].name
      }else {
        tmpList[i].checked = false
      }
    }
    
    //改变菜单选中 包括头部和菜单内容
    setList(Object.assign([], list, tmpList));
    setToggle(toggle);
  },[id])
  
  let Items = list && list.map((item, index) => 
        <Dropdown.Item eventKey={item.id} key={item.id} active={item.checked ? true : false} onClick={() => setId(item.id)}>{item.name}</Dropdown.Item>
      );
  return (
    <>
      {Items}
    </>
  )
}

const DropdownButton = props => {
  const list = props.list;
  const [toggle, setToggle] = useState(props.toggle);
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{"boxShadow": "none"}}>
        {toggle ? toggle : list[0].name}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <ListItem list={list} changeToggle={setToggle}/>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownButton;