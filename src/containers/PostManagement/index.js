import React, { useEffect, useMemo, useState, useContext } from "react";
import { Button } from "antd";

import PostCard from "../../components/PostCard";
import EdittingForm from "../../components/EdittingForm";

import {
  generateID,
  savePostToLocalStorage,
  getPostFromLocalStorage,
} from "../../services";
import authContext from "../../context/authContext";

import "./style.scss";

const PostManagement = () => {
  const [listPost, setListPost] = useState([]);
  const [edittingPost, setEdittingPost] = useState(null);
  const auth = useContext(authContext);

  useEffect(() => {
    const savedPostList = getPostFromLocalStorage(auth.username);
    if (Array.isArray(savedPostList) && savedPostList.length > 0) {
      setListPost(savedPostList);
    }
  }, [auth.username]);

  useEffect(() => {}, [listPost, auth.username]);

  const handleEditPost = (id) => () => {
    const postToEdit = listPost.find((post) => post.id === id);

    setEdittingPost(postToEdit);
  };

  const handledeletePost = (id) => () => {
    const newListPost = listPost.filter((post) => post.id !== id);
    savePostToLocalStorage(auth.username, newListPost);
    setListPost(newListPost);
  };

  const handleSaveEdit = (editedPost) => {
    const { id: postId } = editedPost;
    let currentEditingPostIndex = listPost.findIndex(
      (post) => post.id === postId,
    );

    if (currentEditingPostIndex !== -1) {
      listPost[currentEditingPostIndex] = editedPost;

      savePostToLocalStorage(auth.username, listPost);
      setListPost(listPost);
    } else {
      savePostToLocalStorage(auth.username, [...listPost, editedPost]);
      setListPost([...listPost, editedPost]);
    }

    setEdittingPost(null);
  };

  const handleCancelEdit = () => {
    setEdittingPost(null);
  };

  const handleAddNew = () => {
    const newPost = {
      id: generateID(),
      title: "",
      desc: "",
    };

    setEdittingPost(newPost);
  };

  const isEditting = useMemo(() => !!edittingPost, [edittingPost]);
  return (
    <div className="post-management--container">
      <h1>Post Management</h1>
      <div className="post-management--body">
        <div className="post-management--body-left">
          <h2>All posts here:</h2>

          <div className="post-list">
            {listPost.length > 0
              ? listPost.map((post) => (
                  <div className="post-item" key={post.id}>
                    <PostCard
                      post={post}
                      onEdit={handleEditPost}
                      onDelete={handledeletePost}
                    />
                  </div>
                ))
              : "No data"}
          </div>
        </div>
        <div className="post-management--body-right">
          <h2>Edit and create new post here</h2>
          <div className="post-edit">
            {isEditting ? (
              <EdittingForm
                post={edittingPost}
                onClickCancel={handleCancelEdit}
                onClickSave={handleSaveEdit}
              />
            ) : (
              <Button type="primary" onClick={handleAddNew}>
                Add new post
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostManagement;
