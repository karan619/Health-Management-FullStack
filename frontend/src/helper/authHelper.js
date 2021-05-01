export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const isAuthenticated = () => {
  try {
    return parseJwt(sessionStorage.getItem("token"));
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default isAuthenticated;
