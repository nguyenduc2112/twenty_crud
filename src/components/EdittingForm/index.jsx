import React from "react";
import PropTypes from "prop-types";

import { Form, Input, Button } from "antd";

import { post } from "../../types";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

const EdittingForm = ({ post, onClickSave, onClickCancel, isCreateNew }) => {
  const handleSave = (values) => {
    onClickSave({ ...values, id: post.id });
  };

  return (
    <Form initialValues={post} onFinish={handleSave} {...layout}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Post's title can not be empty" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="desc">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button type="primary" danger onClick={onClickCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

EdittingForm.propTypes = {
  post: post.isRequired,
  onClickSave: PropTypes.func,
  onClickCancel: PropTypes.func,
};

EdittingForm.defaultProps = {
  onClickSave: () => {},
  onClickCancel: () => {},
};

export default EdittingForm;
