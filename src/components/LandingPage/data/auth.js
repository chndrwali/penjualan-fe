// localStorage.js
const setAuthToken = (token) => {
    localStorage.setItem('jwt', token);
  };
  
  const getAuthToken = () => {
    return localStorage.getItem('token');
  };
  
  export { setAuthToken, getAuthToken };
  