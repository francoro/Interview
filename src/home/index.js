import React, { Component } from 'react';
import './index.css';
import SimpleSelect from '../components/simpleSelect';
import SearchButton from '../components/searchButton';
import { PLAYERS_LOAD } from '../Store_actions';
import { connect } from "react-redux";
import { getPlayerState } from '../selectors'
import Table from '../components/table'
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      position: "",
      name: null,
      age: null,
      players: null
    }
  }

  componentDidMount() {
    this.props.PLAYERS_LOAD()
  }

  _updatePlayerAge = (evt) => {
    let now = new Date();
    now.setFullYear(now.getFullYear() - evt.target.value)
    let dateFormated = now.getFullYear()
    this.setState({
      age: dateFormated
    });
  }

  _updatePlayerName = (evt) => {
    this.setState({
      name: evt.target.value
    });
  }

  _updatePlayerPosition = (val) => {
    this.setState({
      position: val
    });
  }

  _search = () => {
    console.log(2, this.props.players)
    let allPlayers = this.props.players;
    let playersFiltered = allPlayers.filter(item => {
      let month = item.dateOfBirth.split("-")[1];

      let monthNow = new Date();
      monthNow = monthNow.getMonth() + 1;

      if (item.position == this.state.position || item.name == this.state.name || item.dateOfBirth.search(this.state.age) > - 1 && monthNow >= month) {
        return true
      }
    })

    this.setState({players: playersFiltered})

    console.log(3,playersFiltered)

  }

  render() {

    return (
      <div className="app">
        <div className="title-container">
          <h1>Football Player Finder </h1>
        </div>
        <div className="filters-row">
          <input className="input-name" placeholder="Player Name" onChange={evt => this._updatePlayerName(evt)} />
          <SimpleSelect position={this.state.position} selectPosition={(val) => this._updatePlayerPosition(val)} />
          <input className="input-age" type="number" placeholder="Age" min={18} max={40} onChange={evt => this._updatePlayerAge(evt)} />
          <SearchButton search={() => this._search()} />
        </div>
        <Table players={this.state.players || this.props.players}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: getPlayerState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    PLAYERS_LOAD: () => {
      dispatch(PLAYERS_LOAD());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
