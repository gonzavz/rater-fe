import React, { Component } from 'react';
import { Row, Col } from 'antd';
import query from '../queries/SessionQuery';
import { graphql } from 'react-apollo';
import { Route } from 'react-router';
import Dashboard from './Dashboard/Index';
import Welcome from './Home/Welcome';
class Home extends Component {
  
  render() {
      console.log(this.props);
      
      const {data} = this.props;
      
      if(data.loading) {
        return (<div>Loading...</div>)
      }

      return (
        <Row type="flex" justify="space-around">
            <Col span={20}>
              <h1> Welcome to Rater</h1>
              <Welcome session={data.session} />
            </Col>
        </Row>
      );
  }
}
  
  export default graphql(query)(Home);