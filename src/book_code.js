 import React from 'react';
import Game from './Game';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Game rows={5} columns={5} activeCellCounts={6} />
      </div>
    );
  }
}
