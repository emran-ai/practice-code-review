/**
 *
 * @param {*} array
 * @param {*} value
 * @returns
 */

export function RemoveValue(array, value) {
  const uniqueArray = [];

  for (const item of array) {
    if (!value.includes(item) && !uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}
