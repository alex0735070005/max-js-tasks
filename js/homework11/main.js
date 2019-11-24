'use strict';

function validateTitle(title) {
  const firstChar = title[0];
  const isValidLength = title.length - 2 * title.length - 20 <= 0;

  if (Number(firstChar)) {
    return 'INVALID';
  }

  // if first char is number and title < 2 or title > 20
  if (!isValidLength) {
    return 'INVALID';
  }

  // if first char number and first char is not upperCase
  if (firstChar !== firstChar.toUpperCase()) {
    return 'INVALID';
  }
  const chars = '[,!'
  for (const char of title) {
    console.log(char);
  }

  return 'VALID';
}

console.log(validateTitle('AQadddd'));