import { userList } from "../constants";

export const isValidUser = (username, password) => {
  const user = userList.find(
    (user) => user.username === username && user.password === password,
  );

  return !!user;
};

export const generateID = () => {
  let d = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const savePostToLocalStorage = (username, listPost) => {
  const stringListPost = JSON.stringify(listPost);
  localStorage.setItem(username, stringListPost);
};

export const getPostFromLocalStorage = (username) => {
  const stringListPost = !!localStorage.getItem(username)
    ? localStorage.getItem(username)
    : "[]";

  return JSON.parse(stringListPost);
};
