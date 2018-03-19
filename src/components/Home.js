import React, { Component } from 'react';
import {Layout, Button, Icon, Row, Col} from 'antd'

class Home extends Component {
    render() {
      return (
        <Row type="flex" justify="space-around">
            <Col span={4}>Welcome to Rater</Col>
        </Row>
      );
    }
  }
  
  export default Home;