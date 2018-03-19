import React, { Component } from 'react';
import {Layout, Button, Icon, Row, Col} from 'antd';
import mutation from '../../mutations/Login';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo'
import query from '../../queries/SessionQuery';
import AuthForm from './Form';
import localSession from '../../vendor/localSession';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {errors: []};
  }

  onSubmit({username, password}) {
    const variables = {username, password};
    this.props.login({variables})
      .then(({data}) => localSession.set(data.login.token))
      .then(() => this.props.sessionQuery.refetch())
      .then(() => this.props.history.push('/'))
      .catch ((error) => {
        const errors = error.graphQLErrors.map(e => e.message);
        this.setState({ errors })
      });
  }

  render() {
    return (
      <Row>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </Row>
    );
  }
}
  
export default compose(
  graphql(query, { name: 'sessionQuery' }),
  graphql(mutation, { name: 'login' }),
)(withRouter(LoginForm));
