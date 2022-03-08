import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         value: ''
      }
    }

    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Condinally Run Effect!!!');
            document.title = `You clicked ${this.state.count} times`;
        }
    }

  render() {
    return (
      <div>
          <button onClick={() => this.setState((prevCount) => ({count: prevCount.count + 1}))}>
              Click {this.state.count} times
          </button>
          <input type='text' onChange={(e) => (this.setState({value: e.target.value}))} value={this.state.value} />
      </div>
    )
  }
}

export default ClassCounter;