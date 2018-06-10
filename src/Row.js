import React from 'react';
class Row extends React.Component{
  render(){

    return(
       <div className="rows">
        {this.props.children
        }
       </div>

    );
  }
}
export default Row;
