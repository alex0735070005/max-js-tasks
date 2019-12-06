/* eslint-disable func-names */
/* eslint-disable no-var */
/* eslint-disable no-console */

/**
 * task-1
 */
const cache = function (callback) {
  const cache = {};

  return function (...data) {
    const key = JSON.stringify(data);
    if (cache[key]) {
      console.log('function is not invoked return cache result');
      return cache[key];
    }
    cache[key] = callback(...data);
    console.log('function is invoked');
    return cache[key];
  };
};

const complexFunction = function (arg1, arg2) {
  return arg1 + arg2;
};

const cachedFunction = cache(complexFunction);
console.log('----task 1----');
console.log(cachedFunction(1, 2));
console.log(cachedFunction(1, 2));
console.log(cachedFunction(1, 3));
console.log(cachedFunction(1, 3));

/**
 * task-2
 */
const ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};
console.log('----task 2----');
ladder.up().up().down().up().showStep();

/**
 * task-3
 */
const sum = (a, b, c) => {
  return a + b + c;
};
console.log('----task 3----');
// ES6
const applyAllES6 = (callback, ...data) => callback(...data);
console.log('applyAllES6', applyAllES6(sum, 1, 2, 3));

// ES5
var applyAllES5 = function (callback) {
  var data = [];
  for (var i in arguments) {
    if (Number(i) !== 0) {
      data.push(arguments[i]);
    }
  }
  return callback.apply(null, data);
};

console.log('applyAllES5', applyAllES5(sum, 1, 2, 8));

/**
 * Task-4
 */

let obj = {
  name: 'Ivan',
  surname: 'Baraban',
  age: 42,
  score: 12,
};

let obj2 = {
  name: 'Petya',
  surname: 'Padavan',
  age: 52,
  score: 25,
};

const greetings = function hello(greeting) {
  return `${greeting}, my name is ${this.name || 'unknown'}`;
};

const showSuccess = function showSuccessKoef() {
  return (this.age / this.score) || 0;
};

const howOldAreYou = function myAge() {
  return this.age || 'age is unavaiable';
};

const patchObject = function (data, ...rest) {
  return rest.reduce((ak, handler) => {
    ak[handler.name] = handler;
    return ak;
  }, {...data});
};

obj = patchObject(obj, greetings, howOldAreYou, showSuccess);
obj2 = patchObject(obj2, greetings, howOldAreYou);
const obj3 = patchObject(null, greetings, howOldAreYou, showSuccess);

console.log('----task 4----');
console.log(obj.hello('yo'));
console.log(obj.myAge());
console.log(obj.showSuccessKoef());

console.log(obj2.hello('Hi sir'));
console.log(obj2.myAge());

console.log(obj3.hello('good day'));
console.log(obj3.myAge());
console.log(obj3.showSuccessKoef());

/**
 * Task-5
 */

function zero(h) {
  return h ? h(0) : 0;
}

function one(h) {
  return h ? h(1) : 1;
}

function two(h) {
  return h ? h(2) : 2;
}

function three(h) {
  return h ? h(3) : 3;
}

function four(h) {
  return h ? h(4) : 4;
}

function five(h) {
  return h ? h(5) : 5;
}

function six(h) {
  return h ? h(6) : 6;
}

function seven(h) {
  return h ? h(7) : 7;
}

function eight(h) {
  return h ? h(8) : 8;
}

function nine(h) {
  return h ? h(9) : 9;
}

function plus(n1) {
  return function (n2) {
    return n2 + n1;
  };
}

function minus(n1) {
  return function (n2) {
    return n2 - n1;
  };
}

function myltiply(n1) {
  return function (n2) {
    return n2 * n1;
  };
}

function divide(n1) {
  return function (n2) {
    return n2 / n1;
  };
}

console.log('----task 5----');
console.log(seven(myltiply(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(divide(two())));
console.log(one(plus(zero())));
console.log(one(plus(two(plus(three())))));