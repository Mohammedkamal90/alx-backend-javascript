// File: 4-user-promise.js

function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstname: firstName,
    lastname: lastName,
  });
}

export default signUpUser;
