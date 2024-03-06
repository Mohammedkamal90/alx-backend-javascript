// File: 100-await.js
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Handle errors and return an empty object
    console.error('Error:', error.message);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
