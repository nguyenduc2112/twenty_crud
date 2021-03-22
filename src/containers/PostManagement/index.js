import React from "react";

import "./style.scss";

const PostManagement = () => {
  return (
    <div className="post-management--container">
      <h1>Post Management</h1>
      <div className="post-management--body">
        <div className="post-management--body-left">
          <p>
            <h2>All posts here:</h2>
          </p>
        </div>
        <div className="post-management--body-right">
          <p>
            <h2>Edit and create new post here</h2>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostManagement;
