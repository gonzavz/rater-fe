import React, { Component } from 'react';
import logo from './logo.svg';
import {Layout} from 'antd'
import Header from './components/Header';

import './App.css';



class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
      </Layout>
    );
  }
}

export default App;
