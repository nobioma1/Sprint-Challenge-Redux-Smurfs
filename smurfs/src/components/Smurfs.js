import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { fetchSmurfs, deleteSmurf } from '../actions';
import { SmurfsDiv, Smurf } from '../styles';

class Smurfs extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <SmurfsDiv>
        {this.props.smurfs.length > 0 ? (
          this.props.smurfs.map(smurf => (
            <li key={smurf.id}>
              <Smurf>
                <h2>Name: {smurf.name} </h2>
                <p>Name: {smurf.height} </p>
                <p>Name: {smurf.age} </p>
                <button onClick={() => this.props.deleteSmurf(smurf.id)}>
                  <FaTrash />
                </button>
              </Smurf>
            </li>
          ))
        ) : (
          <h3>No Smurf Available</h3>
        )}
      </SmurfsDiv>
    );
  }
}

export default connect(
  state => state,
  { fetchSmurfs, deleteSmurf },
)(Smurfs);
