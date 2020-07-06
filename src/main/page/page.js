import React from 'react';

export default props => {
  return (
    <footer className="foot">
      <div className="pageNumber">
       总共{ props.listCount || 0 }条 当前为第{ props.currentPage || 0 }页
      </div>
    </footer>
  )
}