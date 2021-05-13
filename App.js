import './App.css';
import { SortM } from './componets/SortM';
import { SortF } from './componets/SortF';
import { Component } from 'react';
import Header from './componets/Header';
import { Sorteio } from './componets/Sorteio';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      sexoD: '',
    };
  }
  async componentDidMount() {
    const res = await fetch('http://localhost:4000/names_list');
    const json = await res.json();

    const voteM = json.filter((vote) => {
      return vote.vote === 'M';
    });
    const voteF = json.filter((vote) => {
      return vote.vote === 'F';
    });
    this.setState({
      voteM,
      voteF,
    });
  }

  handleChange = (sexo) => {
    this.setState({
      sexoD: sexo,
    });
  };

  render() {
    const { voteM, sexoD } = this.state;
    const { voteF } = this.state;

    return (
      <div className="App">
        <h1>Sorteador</h1>
        <div className="inputSexo">
          <Header sexoD={sexoD} onChange={this.handleChange} />
        </div>
        <div className="nomeSorteado">
          <Sorteio sexoBrotim={sexoD} menino={voteM} menina={voteF} />
        </div>

        <div className="Lista">
          <div className="ListaM">
            <SortM voteM={voteM} />
          </div>
          <div className="ListaF">
            <SortF voteF={voteF} />
          </div>
        </div>
      </div>
    );
  }
}
