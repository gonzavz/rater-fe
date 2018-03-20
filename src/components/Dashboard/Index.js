import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router';
import Profile from './Profile';

const { Content } = Layout;

class Index extends Component {
  render() {
    return (
        <Layout>
          <Content>
               <Profile />
            </Content>
        </Layout>
    );
  }
}

export default Index;
