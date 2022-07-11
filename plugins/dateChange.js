// change XXXX - HH to XXXX - month
export default ({ app }, inject) => {
  inject('dateChange', dateChange);
};
export function dateChange(arr) {
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthList[parseInt(arr.slice(-2)) - 1];
  const year = arr.slice(0, 4);
  return `${month} ${year}`;
}
