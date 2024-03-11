// File: 100-weak.js

// Create a WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    // Increment the query count for the endpoint
    const queryCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, queryCount);

    // Check if the query count is >= 5 and throw an error
    if (queryCount >= 5) {
      throw new Error('Endpoint load is high');
    }
  }

  // Log the current query count for the endpoint
  console.log(weakMap.get(endpoint));
}
