import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
      this.mouseMovehandler = this.mouseMovehandler.bind(this);
    }

    mouseMovehandler(e){
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.mouseMovehandler)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.mouseMovehandler);
    }

  render() {
    return (
      <div>
          X - {this.state.y} : Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse;