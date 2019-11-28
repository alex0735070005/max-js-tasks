/* eslint-disable no-console */
'use strict';

function validateTitle(title) {
  if (typeof title !== 'string') {
    return 'incorect data';
  }

  if (title.length < 2 || title.length > 20) {
    return 'INVALID';
  }

  const checkData = [' ', '!', ':', '-', '?', '.', ','];

  const isValidChars = !title.split('').filter((char, index) => {
    const code = char.codePointAt();
    if (!index) {
      return (code < 65 || code > 90);
    }
    return ((code < 65 || code > 122) && !checkData.includes(char));
  }).length;

  return isValidChars ? 'VALID' : 'INVALID';
}

console.log('check "hello"', validateTitle('hello'));
console.log('check "Hello"', validateTitle('Hello'));
console.log('check "Hello!"', validateTitle('Hello!'));
console.log('check "1ello"', validateTitle('1hello'));
console.log('check "1ello?"', validateTitle('1hello?'));
console.log('check "hi" > 2', validateTitle('hi'));
console.log('check "helloooooooooooooooo" less 20', validateTitle('helloooooooooooooooo'));
console.log('check "?hello" less 20', validateTitle('?hello'));

const sum = (num1, num2) => {
  const getWidthType = (n) => ((typeof n !== 'string' && !(n % 15)) ? n * -1 : Number(n));
  return getWidthType(num1) + getWidthType(num2);
};

console.log('check "1, 2"', sum('1', 2));
console.log('check "1, 15"', sum('1', 15));
console.log('check "1, 25"', sum('1', 25));
console.log('check "1, 3"', sum('1', 3));
console.log('check "1, 30"', sum('1', 30));
