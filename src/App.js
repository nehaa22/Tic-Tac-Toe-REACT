import React,{Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill(null)
    }
  }

  handleClick(index){
    let newBoard = this.state.board
    newBoard[index] = "X"
     this.setState({
       board : newBoard
     })

     

  }
  

render(){

const Box = this.state.board.map((box,index) =>
             <div className = "box" key = {index} 
                onClick = {() => this.handleClick(index)}>
                {box}
               </div> )

  return (
    <div className="container">
      <h1> Tic-Tac-Toe</h1>
      <div className = "board">
        {Box}
    
      </div>


    </div>
  );
}
}

export default App;
