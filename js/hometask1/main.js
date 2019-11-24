/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

// 2 code to be will-formatted, clean and readable
// 3 Describe in the comments why is the second console not called

// Since the first condition is true, the second will not work
let age = 12;

if (age > 5) {
  age = 5;
  console.log('More than 5');
} else if (age < 10) {
  console.log('Less than 5');
}

// 4 replase if...else width the conditional (ternary) operator and switch...case

let message;

const login = 'Maks';

switch (login) {
  case 'Maks':
    message = 'Hi, Maks';
    break;
  case 'Serg':
    message = 'Hi, Serg';
    break;
  case '':
    message = 'Hi undefined';
    break;
  default: message = '';
}

message = login === 'Maks' ? 'Hi, Maks' : login === 'Serg' ? 'Hi, Serg' : login === '' ? 'Hi undefined' : '';

console.log(message);
