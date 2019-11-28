/* eslint-disable no-console */
'use strict';

function validateTitle(title) {
  if (typeof title !== 'string') {
    return 'incorect data';
  }

  if ((title.length - 2) * (title.length - 20) > 0) {
    return 'INVALID';
  }

  const checkData = [' ','!',':','-','?','.',','];

  const fChar = title[0];

  const isContainChars = !!(title.split('').find((char) => checkData.includes(char)));

  const isValidFChar = ((fChar.codePointAt() - 65) * (fChar.codePointAt() - 90)) <= 0;

  return (isContainChars && isValidFChar) ? 'VALID' : 'INVALID';
}

console.log('check "hello"', validateTitle('hello'));
console.log('check "Hello"', validateTitle('Hello'));
console.log('check "Hello!"', validateTitle('Hello!'));
console.log('check "1ello"', validateTitle('1hello'));
console.log('check "1ello?"', validateTitle('1hello?'));
console.log('check "hi" > 2', validateTitle('hi'));
console.log('check "helloooooooooooooooo" less 20', validateTitle('helloooooooooooooooo'));
console.log('check "?hello" less 20', validateTitle('?hello'));

const sum = (num1, num2) => Number(num1) + (num2 % 15 ? num2 : num2 * -1);

console.log('check "1, 2"', sum('1', 2));
console.log('check "1, 15"', sum('1', 15));
console.log('check "1, 25"', sum('1', 25));
console.log('check "1, 3"', sum('1', 3));
console.log('check "1, 30"', sum('1', 30));
