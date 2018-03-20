import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Index';
import Register from './components/Register';
import './App.css';

const { Content } = Layout;


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
              <Route exact path="/register" component={Register} />
              <Route path="/dashboard/:username" component={Dashboard} />
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
