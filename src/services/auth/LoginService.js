import getUserData from "../users/userData";

export function checkLogin(state) {
  const userData = getUserData();
  let isMatched = false;
  userData.forEach((user, index) => {
    if (user.password === state.password && user.username === state.username) {
      isMatched = true;
    }
  });
  return isMatched;
}
