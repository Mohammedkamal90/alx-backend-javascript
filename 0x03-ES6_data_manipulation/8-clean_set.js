// File: 8-clean_set.js

function cleanSet(set, startString) {
  // Filter the set values that start with the specified string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Join the filtered values with "-"
  const resultString = filteredValues.join('-');

  return resultString;
}

export default cleanSet;
