module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = bracketsConfig.map( item => item[0] );
  const closingBrackets = bracketsConfig.map( item => item[1] );
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0 && closingBrackets.includes(arr[i]) && !openingBrackets.includes(arr[i])) return false;
    if (stack.length !== 0 && openingBrackets[closingBrackets.indexOf(arr[i])] === stack[stack.length-1]) {
        stack.pop();
    } else if(openingBrackets.includes(arr[i])) {
        stack.push(arr[i]);
    }
  }
  return stack.length === 0 ? true : false;
}
