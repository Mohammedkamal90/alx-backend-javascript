// File: 5-typed_arrays.js

function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the buffer
  const dataView = new DataView(buffer);

  // Check if the specified position is within the range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}

export default createInt8TypedArray;
