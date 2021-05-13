import React, { Component } from 'react';
export class SortF extends Component {
  render() {
    const { voteF } = this.props;

    if (voteF) {
      return (
        <div>
          <h2>Menina</h2>
          <ul>
            {voteF.map((nameF) => {
              return <li key={nameF.id}>{nameF.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Menina</h2>
          <ul>
            <p>Carregando....</p>
          </ul>
        </div>
      );
    }
  }
}
