export default function fyMap(originalArray, callback) {
  let remaining = originalArray.length;

  const mappedArray = Array(remaining);
  const indexArray = Array.from(mappedArray.keys());

  // While there remain elements to shuffleMap
  while (remaining !== 0) {
    // Pick a remaining index...
    const shuffleIndex = Math.floor(Math.random() * remaining--);

    // Then run the callback on the original array's item
    const originalArrayIndex = indexArray[shuffleIndex];
    mappedArray[originalArrayIndex] = callback(
      originalArray[originalArrayIndex],
      originalArrayIndex,
      originalArray
    );

    // Swap the index with the current index.
    const swapElement = indexArray[remaining];
    indexArray[remaining] = indexArray[shuffleIndex];
    indexArray[shuffleIndex] = swapElement;
  }

  return mappedArray;
}