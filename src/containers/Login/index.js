import React from "react";

import { Form, Button, Input, Checkbox } from "antd";

import "./style.scss";

const Login = () => {
  const handleSubmit = (values) => {
    console.log({ values });
  };

  return (
    <div className="login-form">
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input the username!!!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input the password!!!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remeber me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
