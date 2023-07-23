/**
 *
 * @param {*} array
 * @param {*} value
 * @returns
 */

export function RemoveValue(array, value) {
  return array.filter((item) => !value.includes(item));
}
