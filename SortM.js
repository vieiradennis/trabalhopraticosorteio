import React, { Component } from 'react';
export class SortM extends Component {
  render() {
    const { voteM } = this.props;

    if (voteM) {
      return (
        <div>
          <h2>Menino</h2>
          <ul>
            {voteM.map((nameM) => {
              return <li key={nameM.id}>{nameM.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Menino</h2>
          <ul>
            <p>Carregando....</p>
          </ul>
        </div>
      );
    }
  }
}
