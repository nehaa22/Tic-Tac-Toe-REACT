import React,{Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill("x")
    }
  }
  

render(){

const Box = this.state.board.map(box => <div className = "box">{box}</div> )

  return (
    <div className="container">
      <h1> Tic-Tac-Toe</h1>
      <div className = "board">
        {Box}
      {/* <div className = "box"></div>
      <div className = "box"></div>
      <div className = "box"></div>
      <div className = "box"></div>
      <div className = "box"></div>
      <div className = "box"></div>
      <div className = "box"></div>
      <div className = "box"></div>
      <div className = "box"></div> */}
      </div>


    </div>
  );
}
}

export default App;
