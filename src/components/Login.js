import React, { Component } from 'react';
import {Layout, Button, Icon, Row, Col} from 'antd';
import LoginForm from './Auth/LoginForm';

class Login extends Component {
    render() {
      return (
        <Layout className="full-screen">
            <Row type="flex" justify="center">
                <Col xs={14} sm={12} md={6} lg={5} xl={4}>
                <LoginForm />
                </Col>
            </Row>
        </Layout>
      );
    }
  }
  
  export default Login;