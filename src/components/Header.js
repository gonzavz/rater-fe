import React, { Component } from 'react';
import {Layout, Button, Icon, Row, Col} from 'antd'
const AntHeader = Layout.Header;

class Header extends Component {
    render() {
      return (
        <AntHeader>
          <Row type="flex" justify="space-around">
            <Col span={4}>Rater Icon CS</Col>
            <Col span={4}>
              <Row type="flex" gutter={16}>
                <Button type="primary" shape="circle" icon="usergroup-add" size="large" />
                <Button type="primary" shape="circle" icon="login" size="large" />
              </Row>
            </Col>
          </Row>
        </AntHeader>
      );
    }
  }
  
  export default Header;