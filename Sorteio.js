import React, { Component } from 'react';
export class Sorteio extends Component {
  render() {
    let { sexoBrotim, menino, menina } = this.props;

    if (sexoBrotim !== '' && menina !== '' && menino !== '') {
      if (sexoBrotim === 'Menino') {
        let lengthArray = menino.length;
        let nAleatorio = Math.floor(Math.random() * lengthArray);
        sexoBrotim = menino[nAleatorio].name;
      } else {
        let lengthArray = menina.length;
        let nAleatorio = Math.floor(Math.random() * lengthArray);
        sexoBrotim = menina[nAleatorio].name;
      }
    }

    return (
      <div>
        {}
        <p>{sexoBrotim}</p>
      </div>
    );
  }
}
