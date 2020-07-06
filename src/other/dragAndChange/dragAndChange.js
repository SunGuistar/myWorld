import React, {Component} from 'react';
import list from './list'

require('./dragAndChange.less')

/*
* 必要参数，可考虑从外部接收
* lineHeight是单格高度
* lineWidth是单格宽度
* lineNumber是一行的最大个数
* proportion 是交换位置的最低比例
*/
const lineHeight = 40;
const lineWidth = 102 ;
const lineNumber = 5;
const proportion = 0.6;

class DragChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      draggingIndex: -1,
      startPageX: 0,
      startPageY: 0,
      offsetPageY: 0,
      offsetPageX: 0,
      mainTop: 0,
      mainLeft: 0,
      mainRight: 0,
      mainBottom: 0,
    };
    this.state.list = list;
    this.rangeUl = React.createRef();
  }

  handleMouseDown = (e, index) => {
    let ulData = this.rangeUl.current;
    this.setState({
      dragging: true,
      draggingIndex: index,
      startPageX: e.pageX,
      startPageY:e.pageY,
      mainTop: ulData.offsetTop,
      mainLeft: ulData.offsetLeft,
      mainRight: ulData.offsetLeft + ulData.offsetWidth,
      mainBottom: ulData.offsetTop + ulData.offsetHeight,
    })
  }

  getDraggingStyle = index => {
    if(index !== this.state.draggingIndex) {
      return;
    }
    return {
      transform: `translate(${this.state.offsetPageX}px, ${this.state.offsetPageY}px)`,
      opacity:0.5,
    }
  }

  handleMouseMove = e => {
    this.setState({
      offsetPageX: e.pageX - this.state.startPageX,
      offsetPageY: e.pageY - this.state.startPageY,
    })
  }

  handleMouseUp = e => {
    if(this.state.draggingIndex < 0) {
      console.log(`dragAndChange-handleMouseUp error`)
      return;
    }
    let lengthX = e.pageX - this.state.startPageX; //X轴移动距离
    let lengthY =e.pageY - this.state.startPageY; //Y轴移动距离
    let flagX = lengthX < 0 ? -1 : 1; //X轴移动方向
    let flagY = lengthY < 0 ? -1 : 1; //Y轴移动方向
    let offsetLastX = Math.abs(lengthX % lineWidth); //X轴移动剩余距离
    let offsetLastY = Math.abs(lengthY % lineHeight); //Y轴移动剩余距离
    let offsetNumberX = Math.floor(Math.abs(lengthX / lineWidth)); //X轴移动格数
    let offsetNumberY = Math.floor(Math.abs(lengthY / lineHeight)); //Y轴移动格数
    let leastX = lineWidth * proportion; //X轴最少移动距离
    let leastY = lineHeight * proportion; //Y轴最少移动距离
    let startIndex = this.state.draggingIndex; //移动的项

    //超出范围
    if((flagX === 1 && lengthX > (this.state.mainRight - this.state.startPageX))
        || (flagX === -1 && -lengthX > (this.state.startPageX - this.state.mainLeft))
        || (flagY === 1 && lengthY > (this.state.mainBottom - this.state.startPageY))
        || (flagY === -1 && -lengthY > (this.state.startPageY - this.state.mainTop))
      ) {
      console.log(`超出范围 拒绝拖放`)  
    }else {
      /*
      * 算法：计算移动距离，查看是否有匹配项
      */
      if(Math.abs(e.pageX) >= leastX || Math.abs(e.pageY) >= leastY) {
        if(offsetLastX >= leastX) {
          offsetNumberX++;
        }
        if(offsetLastY >= leastY){
          offsetNumberY++;
        }
        let currentIndex = 0;
        currentIndex = startIndex+(offsetNumberX * flagX)+(offsetNumberY * flagY)*lineNumber;
        debugger
        if(currentIndex < this.state.list.length && currentIndex >= 0) {
          [this.state.list[startIndex],this.state.list[currentIndex]] = [this.state.list[currentIndex],this.state.list[startIndex]];
        }
      }
    }
    this.setState({
      dragging: false,
      draggingIndex: -1,
      startPageX: 0,
      startPageY: 0,
      offsetPageY: 0,
      offsetPageX: 0,
    })
  }
  render() {
    return (
      <div className="drag-content">
        <ul
          ref={this.rangeUl}
        >
          {this.state.list.map((text, index) => (
            <li
              key={text}
              onMouseDown={e => this.handleMouseDown(e, index)}
              style={this.getDraggingStyle(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        {this.state.dragging && (
          <div 
            className="drag-mask"
            onMouseMove={e => this.handleMouseMove(e)}
            onMouseUp={e => this.handleMouseUp(e)}
          />
        )}
      </div>
    )
  }
}

export default DragChange;