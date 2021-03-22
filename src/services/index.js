import { userList } from "../constants";

export const isValidUser = (username, password) => {
  const user = userList.find(
    (user) => user.username === username && user.password === password,
  );

  return !!user;
};
