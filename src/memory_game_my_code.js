import React from 'react';


export default class App extends React.Component {
  constructor(props){
   super(props);
   this.handleUpdate = this.handleUpdate.bind(this);
   this.state={

     score: 0,
     prevNum: 0,
     currNum: 0
   };
  }
 handleUpdate(val){
  //alert('asigh');

   val = parseInt(val,10);
  // alert(val);
  // console.log('val'+val);
 var curScore = parseInt(this.state.score,10);
  //console.log('curScore'+curScore);
  var curVal = parseInt(this.state.prevNum,10);
  if(val===curVal)
  {
   curScore++;
  }

   this.setState(()=>{
     return {
        score: curScore,
        prevNum: val,
        currNum: val
     };
   });
 }
  render()
  {
    return(
      <div>
        <Header score={this.state.score} currNum={this.state.currNum}/>
        <PressButtons currNum={this.state.currNum} prevNum={this.state.prevNum} prevScore={this.state.score} handleUpdate={this.handleUpdate}/>

      </div>
    );
  }
}
  class Header extends React.Component {
    render(){
    //  console.log('curnum in headert is '+this.props.currNum);
      return(
        <div>
        <h1>Current Number:{this.props.currNum}</h1>
        <h1>Current score: {this.props.score}</h1>
        </div>
      );
    }
  }


  class PressButtons extends React.Component {
    constructor(props) {
      super(props);
      this.clickOne = this.clickOne.bind(this);
      this.clickTwo = this.clickTwo.bind(this);
      this.clickThree = this.clickThree.bind(this);
      this.clickFour = this.clickFour.bind(this);
      this.clickFive = this.clickFive.bind(this);
      this.clickSix = this.clickSix.bind(this);
      this.clickSeven = this.clickSeven.bind(this);
      this.clickEight = this.clickEight.bind(this);
      this.clickNine = this.clickNine.bind(this);
    }
    clickOne(e){
         e.preventDefault();
         this.props.handleUpdate(1);
    }
    clickTwo(e){
         e.preventDefault();
         this.props.handleUpdate(2);
    }
    clickThree(e){
         e.preventDefault();
         this.props.handleUpdate(3);
    }
    clickFour(e){
         e.preventDefault();
         this.props.handleUpdate(4);
    }
    clickFive(e){
         e.preventDefault();
         this.props.handleUpdate(5);
    }
    clickSix(e){
         e.preventDefault();
         this.props.handleUpdate(6);
    }
    clickSeven(e){
         e.preventDefault();
         this.props.handleUpdate(7);
    }
    clickEight(e){
         e.preventDefault();
         this.props.handleUpdate(8);
    }
    clickNine(e){
         e.preventDefault();
         this.props.handleUpdate(9);
    }
    render(){
      return(
        <div>
          <table>
            <tr>
              <td><button onClick={this.clickOne}>One</button></td>
              <td><button onClick={this.clickTwo}>Two</button></td>
              <td><button onClick={this.clickThree}>Three</button></td>
            </tr>
            <tr>
              <td><button onClick={this.clickFour}>Four</button></td>
              <td><button onClick={this.clickFive}>Five</button></td>
              <td><button onClick={this.clickSix}>Six</button></td>
            </tr>
            <tr>
              <td><button onClick={this.clickSeven}>Seven</button></td>
              <td><button onClick={this.clickEight}>Eight</button></td>
              <td><button onClick={this.clickNine}>Nine</button></td>
            </tr>
          </table>
        </div>
      );
    }
  }
