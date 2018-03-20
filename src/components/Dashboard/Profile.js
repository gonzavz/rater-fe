import React, { Component } from 'react';
import {Layout, Button, Icon, Row, Col} from 'antd';
import { compose, graphql } from 'react-apollo';
import PersonForm from './PersonForm';

import mutation from '../../mutations/UpdatePerson';
import query from '../../queries/SessionQuery';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingName: false,
    };
  }

  onSubmit({name, surname}) {
    const {person} = this.props.sessionQuery.session;
    const variables = { id: person.id,  name, surname};
    this.props.updatePerson({variables})
      .then(() => this.props.sessionQuery.refetch())
      .catch ((error) => {
        const errors = error.graphQLErrors.map(e => e.message);
        this.setState({ errors })
      });
  }

  render() {
    const { editingName } = this.state;
    const { sessionQuery } = this.props;
    if (sessionQuery.loading) { return (<div>Loading ...</div>)}
    const {person} = sessionQuery.session;
    const fields = {
      name: {
        value: person.name
      },
      surname: {
        value: person.surname
      },
    };
    return (
      <Row>
        <Col span={20}>
          <PersonForm {...fields} onSubmit={this.onSubmit.bind(this)} />
        </Col>
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </Row>
    );
  }
}

export default compose(
  graphql(query, { name: 'sessionQuery' }),
  graphql(mutation, { name: 'updatePerson' }),
)(Profile);
