import React, { Component } from 'react';

// import { Container } from './styles';

export default class Repository extends Component {
  render() {
    return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
  }
}
