import React, { Component } from 'react';
import {Layout, Button, Icon, Row, Col} from 'antd';
import LoginForm from './Auth/LoginForm';

class Login extends Component {
    render() {
      return (
        <Layout>
            <Row type="flex" justify="space-around">
                <Col span={4}>
                    <LoginForm />
                </Col>
            </Row>
        </Layout>
      );
    }
  }
  
  export default Login;