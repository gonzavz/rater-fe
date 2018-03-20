import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
const FormItem = Form.Item;

class AuthForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  }

  compareToFirstPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  
  handleConfirmBlur(e) {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  renderPasswordConfirm(action) {
    if (action === 'register') {
      const { getFieldDecorator } = this.props.form;
      return (
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword.bind(this),
            }],
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirmar password"
              onBlur={this.handleConfirmBlur.bind(this)} />
          )}
        </FormItem>
      )
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { actionLabel, action } = this.props;
    return (
      <Form onSubmit={this.onSubmit.bind(this)} className="login-form">
        {this.props.errors.map((error, index) => <Alert message={error} type="error" key={index} />)}
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
              { type: 'email', message: 'The input is not valid E-mail!' },
              { required: true, message: 'Please input your email!' }
            ],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="e-mail" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        {this.renderPasswordConfirm(action)}
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            { actionLabel ? actionLabel : 'Log In'}
          </Button>
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
            Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(AuthForm);