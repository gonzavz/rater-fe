import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
const FormItem = Form.Item;

class PersonName extends Component {

  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.onSubmit.bind(this)}>
         <FormItem>
          {getFieldDecorator('name', {
            rules: [],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Tu Nombre" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('surname', {
            rules: [],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellido" />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit">Guardar</Button>
        </Form>
    );
  }
}

export default Form.create({
  mapPropsToFields(props) {
    console.log('form props', props);
    return {
      name: Form.createFormField({
        ...props.name,
        value: props.name.value,
      }),
      surname: Form.createFormField({
        ...props.surname,
        value: props.surname.value,
      }),
    };
  },
})(PersonName);
