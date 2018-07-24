// This method sorts array of objects by one of him keys.
// Receives array of objects for sort (type: array) and name of the key of inner object (type: string).
export const sortArrayOfObjectsByKey = (arrayForSort, keyForSort) => (
  arrayForSort.map(elem => elem[keyForSort]).sort()
    .map(key => arrayForSort.filter(elem => elem[keyForSort] === key)[0])
);