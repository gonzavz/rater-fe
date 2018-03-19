import React, { Component } from 'react';
import {Layout, Button, Icon, Row, Col} from 'antd';
import { withRouter } from 'react-router';
import {graphql} from 'react-apollo';
import query from '../queries/SessionQuery';
import localSession from '../vendor/localSession';

const AntHeader = Layout.Header;

class Header extends Component {
  logOut() {
    localSession.set('');
    this.props.data.refetch();
  }

  renderButtons() {
    const {loading, session} = this.props.data;
    if(loading) {
      return <div>Loading ...</div>;
    }
    if(session){
      return <Row type="flex" gutter={16}>
              <Button
                type="primary"
                shape="circle"
                icon="logout"
                size="large"
                onClick={() => this.logOut()}
              />
            </Row>
    } else {
      return <Row type="flex" gutter={16}>
              <Button type="primary" shape="circle" icon="usergroup-add" size="large" />
              <Button
                type="primary"
                shape="circle"
                icon="login"
                size="large"
                onClick={() => {
                  this.props.history.push(`/login`)
                }}
              />
            </Row> 
    }
  }
  
  render() {
      return (
        <AntHeader>
          <Row type="flex" justify="space-around">
            <Col span={4}>Rater Icon CS</Col>
            <Col span={4}>
              { this.renderButtons() }
            </Col>
          </Row>
        </AntHeader>
      );
    }
  }
  
export default graphql(query)(withRouter(Header));