function balancedBrackets(string) {
  // your code here
  let characters = { ')': '(', '}': '{', ']': '['};
  let stack = [];
  for(let i = 0; i < string.length; i++) {
    if(Object.keys(characters).includes(string[0])) {
      return false;
    }if(Object.values(characters).includes(string[i])) {
        stack.push(string[i]);
    }else if(Object.keys(characters).includes(string[i])) {
      if(stack[stack.length - 1] === characters[string[i]]) {
        stack.pop()
      }
    }
    
  }
  return !stack.length;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
