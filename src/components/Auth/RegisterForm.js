import React, { Component } from 'react';
import mutation from '../../mutations/Register';
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
    this.props.register({variables})
      .then(({data}) => localSession.set(data.register.token))
      .then(() => this.props.sessionQuery.refetch())
      .then(() => this.props.history.push('/'))
      .catch ((error) => {
        if (error.graphQLErrors) {
          const errors = error.graphQLErrors.map(e => e.message);
          this.setState({ errors })
        }
      });
  }

  render() {
    return (
      <AuthForm errors={this.state.errors} action="register" actionLabel="Register" onSubmit={this.onSubmit.bind(this)} />
    );
  }
}
  
export default compose(
  graphql(query, { name: 'sessionQuery' }),
  graphql(mutation, { name: 'register' }),
)(withRouter(LoginForm));
