// File: 0-promise.js

function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    // Simulating an API call or any asynchronous operation
    setTimeout(() => {
      const responseData = { data: "API response data" };
      resolve(responseData);
    }, 1000); // Simulating a delay of 1 second
  });

  return promise;
}

export default getResponseFromAPI;
