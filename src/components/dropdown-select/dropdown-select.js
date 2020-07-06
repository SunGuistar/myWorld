import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const ListItem = props => {
  const list = props.list;
  const Items = list.map((item, index) => 
        <Dropdown.Item eventKey={item.id} key={item.id} active={item.checked ? true : false} >{item.name}</Dropdown.Item>
      );
  return (
    <>
      {Items}
    </>
  )
}

const DropdownButton = props => {
  const list = props.list;
  const toggle = props.toggle;
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{"boxShadow": "none"}}>
        {toggle ? toggle : list[0].name}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <ListItem list={list} />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownButton;