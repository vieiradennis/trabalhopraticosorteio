import React, { Component } from 'react';

export default class Header extends Component {
  inputChange = (evento) => {
    // console.log(evento.target.value);
    const sexoSort = evento.target.value;
    this.props.onChange(sexoSort);
  };
  render() {
    const { sexo } = this.props;
    return (
      <div>
        <input list="sexoBrotim" value={sexo} onChange={this.inputChange} />
        <datalist id="sexoBrotim">
          <option value="Menino"></option>
          <option value="Menina"></option>
        </datalist>
      </div>
    );
  }
}
