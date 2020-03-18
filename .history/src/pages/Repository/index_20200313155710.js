import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default class Repository extends Component {
  async componentDidMount() {
    state = {
      repository: {},
      issues: [],
      loading: true,
    };

    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        state: 'open',
        per_page: 5,
      }),
    ]);

    this.setState({
      repository: repository.data,

      loading: false,
    });
  }

  render() {
    return <h1>Repository</h1>;
  }
}
