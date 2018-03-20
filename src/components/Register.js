import React, { Component } from 'react';
import {Layout, Row, Col} from 'antd';
import RegisterForm from './Auth/RegisterForm';

class Register extends Component {
    render() {
      return (
        <Layout className="full-screen">
            <Row type="flex" justify="center">
                <Col xs={14} sm={12} md={6} lg={5} xl={4}>
                <RegisterForm />
                </Col>
            </Row>
        </Layout>
      );
    }
  }
  
  export default Register;
  