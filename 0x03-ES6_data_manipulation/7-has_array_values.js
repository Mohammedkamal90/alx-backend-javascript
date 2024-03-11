// File: 7-has_array_values.js

function hasValuesFromArray(set, arr) {
  // Check if all elements in the array exist within the set
  const hasAllValues = arr.every((value) => set.has(value));

  return hasAllValues;
}

export default hasValuesFromArray;
