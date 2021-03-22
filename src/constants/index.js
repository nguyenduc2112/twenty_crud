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
