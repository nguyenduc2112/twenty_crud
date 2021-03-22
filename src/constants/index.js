import { generateID } from "../services";

export const userList = (() => {
  let users = [];

  for (let i = 1; i < 6; i++) {
    users.push({
      username: `user${i}`,
      password: "12345",
    });
  }

  return users;
})();

export const postList = (() => {
  let posts = [];

  for (let i = 1; i < 10; i++) {
    posts.push({
      id: generateID(),
      title: `Post No. ${i}`,
      desc:
        "tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.",
    });
  }

  return posts;
})();
