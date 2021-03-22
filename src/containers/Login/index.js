import React, { useContext } from "react";

import { Form, Button, Input, Checkbox } from "antd";

import authContext from "../../context/authContext";
import "./style.scss";

const Login = () => {
  const auth = useContext(authContext);
  const handleSubmit = (values) => {
    console.log({ values });
    const { username, password } = values;
    auth.onLogin(username, password);
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
          <Input.Password />
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
