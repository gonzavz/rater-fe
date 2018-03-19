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
  
  onSubmit({username, password}) {
    this.props.login({
      variables: {username, password},
    }).then(({data}) => {
      const token = data.login.token;
      localSession.set(token);
      this.props.sessionQuery.refetch()
        .then(() => this.props.history.push('/'))
    });
  }

  render() {
    return (
      <Row>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </Row>
    );
  }
}
  
export default compose(
  graphql(query, { name: 'sessionQuery' }),
  graphql(mutation, { name: 'login' }),
)(withRouter(LoginForm));
