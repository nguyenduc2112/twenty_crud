import React from "react";
import { Card } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const PostCard = ({ post, onEdit, onDelete }) => {
  const { id, title, desc } = post;

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={title}
        bordered
        style={{ width: "70%" }}
        actions={[
          <SettingOutlined
            key="setting"
            onClick={() => {
              console.log("you clicked Setting");
            }}
          />,
          <EditOutlined key="edit" onClick={onEdit(id)} />,
          <DeleteOutlined key="delete" onClick={onDelete(id)} />,
        ]}
      >
        <p>{desc}</p>
      </Card>
    </div>
  );
};

export default PostCard;
