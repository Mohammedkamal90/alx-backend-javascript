// File: 10-update_uniq_items.js

function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the entries of the map and update quantities to 100 where initial quantity is 1
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}

export default updateUniqueItems;
