import React, { Component } from 'react';
import logo from './logo.svg';
import {Layout} from 'antd'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

const Content = Layout.Content;


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header />
          <Content>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
