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

console.log('check "Title!"', validateTitle('Title!'));
console.log('check "s"', validateTitle('s'));
console.log('check "12title"', validateTitle('12title'));
console.log('check "Title?"', validateTitle('Title'));
console.log('check "false"', validateTitle(false));

const sum = (num1, num2) => {
  const getWidthType = (n) => ((typeof n !== 'string' && !(n % 15)) ? n * -1 : Number(n));
  return getWidthType(num1) + getWidthType(num2);
};

console.log(sum('25', 15));
console.log(sum(41, '3'));
console.log(sum('3', 45));
console.log(sum('15', 15));
