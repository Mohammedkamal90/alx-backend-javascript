// File: 3-all.js
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
