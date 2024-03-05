// File: 3-all.js
import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`${photoResponse.body} ${userResponse.body}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
