export const UserInfo = function () {
  const userData = JSON.parse(window.localStorage.getItem('userInfo'));
  return userData
};
