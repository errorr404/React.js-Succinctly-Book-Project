import React from 'react';
import Cell from './Cells.js';
import Row from './Row.js';
import Footer from './Footer.js';
import _ from "lodash";
class Game extends React.Component{

constructor(props) {
   super(props);
   this.matrix=[];
   for(let r=0;r<this.props.rows;r++){
     let row=[];
     for(let c=0;c<this.props.columns;c++){
       row.push(`${r}${c}`);
     }
     this.matrix.push(row);
   }
   let flatMatrix = _.flatten(this.matrix);
   this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);

   this.state = {
     gameState: 'ready',
     wrongGuesses:[],
     correctGuesses:[]
    };
  }
      recordGuess({ cellId, userGuessIsCorrect }) {
      let { wrongGuesses, correctGuesses, gameState } = this.state;
      if (userGuessIsCorrect) {
      correctGuesses.push(cellId);
      if (correctGuesses.length === this.props.activeCellsCount) {
      gameState = "won";
      }
      }
      else {
      wrongGuesses.push(cellId);
      if (wrongGuesses.length > this.props.allowedWrongAttempts) {
      gameState = "lost";
      }
      }
      this.setState({ correctGuesses, wrongGuesses, gameState });
      }


  componentDidMount(){
    setTimeout(() => { this.setState({ gameState: 'memorize' }, () => {
      setTimeout(() => this.setState({ gameState: 'recall' }), 2000);
     });
   }, 2000);
  }
  render(){
    let showActiveCells =["memorize", "lost"].indexOf(this.state.gameState) >= 0;

     return(
       <div className="grid">

           {
             this.matrix.map((row, ri) => (
            <Row key={ri}>
            {row.map(cellId =>
            <Cell key={cellId} id={cellId}
            showActiveCells={showActiveCells}
            activeCells={this.activeCells}
            recordGuess={this.recordGuess.bind(this)}
            {...this.state} />)}
            </Row>
          ))
       }
        <Footer {...this.state}
        activeCellsCount = {this.props.activeCellsCount}/>
       </div>

     );
}
}

Game.defaultProps = {
allowedWrongAttempts: 2
};
export default Game;
