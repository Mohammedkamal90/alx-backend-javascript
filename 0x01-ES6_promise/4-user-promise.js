// File: 4-user-promise.js

function signUpUser(firsName, lasName) {
  return Promise.resolve({
    firstName: firsName,
    lastName: lasName,
  });
}

export default signUpUser;
