function isValid(s) {
  const stack = [];
  const paranMap = {
    ']': '[',
    ')': '(',
    '}': '{',

  }
  s.split('').forEach((ch) => {
    if (stack.length > 0) {
      const last = stack[stack.length - 1];
      if (paranMap[ch] === last) {
        stack.pop();
      } else {
        stack.push(ch);
      }
    } else {
      stack.push(ch);
    }
    console.log(stack);
  });
  return stack.length === 0;
}

console.log(isValid('{([])}'));
