/* eslint-disable no-console */
/**
 * task-1
 * @param persons array
 * @return string
 */

function tickets(persons = []) {
  const bills = { 100: 0, 50: 0, 25: 0 };

  const cost = 25;

  for (const p of persons) {
    const pay = Number(p);
    const remain = (pay - cost);

    bills[pay]++;

    if (!remain) {
      continue;
    }

    const dataKeyBills = Object.keys(bills).sort((a, b) => (Number(a) > Number(b) ? -1 : 1));
    const isIssetRemain = dataKeyBills.reduce((remain, bill) => {
      while (remain > 0 && remain >= Number(bill) && bills[bill] > 0) {
        bills[bill]--;
        remain = remain - Number(bill);
      }
      return remain;
    }, remain);

    if (isIssetRemain) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 100]));
console.log(tickets([25, 50, 100]));
console.log(tickets(['25', '25', '50', '100']));
console.log(tickets(['25', '50', '100']));

/**
 * task-2
 * @param a string
 * @param b string
 * @return string
 */
function getSum(a, b) {
  let res = '';
  let remain = false;
  let str1 = String(a);
  let str2 = String(b);

  if (str1.length < str2.length) {
    str1 = String(b);
    str2 = String(a);
  }

  for (let i = str1.length - 1, j = str2.length - 1; i >= 0; i-- , j--) {
    const char1 = Number(str1[i]);
    const char2 = Number(str2[j]);
    const sum = char2 ? String(char1 + char2 + remain) : String(char1 + remain);
    remain = sum >= 10;
    res = (remain ? sum[1] : sum) + res;
  }
  return res;
}

console.log(getSum(111111, 222222));

// data for task 3
const listPosts = [
  {
    id: 1,
    post: 'some post 1',
    title: 'title 1',
    author: 'Rimus',
    comments: [
      {id: 1.1, comment: 'some comment 1', title: 'title comment 1', author: 'Dasha'},
      {id: 1.2, comment: 'some comment 1', title: 'title comment 3', author: 'Vasya'},
      {id: 1.3, comment: 'some comment 1', title: 'title comment 4', author: 'Rimus'},
    ],
  },
  {
    id: 2,
    post: 'some post 2',
    title: 'title 2',
    author: 'Rimus',
    comments: [
      {id: 2.1, comment: 'some comment 1', title: 'title comment 1', author: 'Rimus'},
      {id: 2.2, comment: 'some comment 1', title: 'title comment 3', author: 'Rimus'},
      {id: 2.3, comment: 'some comment 1', title: 'title comment 4', author: 'Olya'},
    ],
  },
  {
    id: 3,
    post: 'some post 2',
    title: 'title 2',
    author: 'Vadya',
    comments: [
      {id: 3.1, comment: 'some comment 1', title: 'title comment 1', author: 'Rimus'},
      {id: 3.2, comment: 'some comment 1', title: 'title comment 2', author: 'Nastya'},
    ],
  },
  {
    id: 3,
    post: 'some post 2',
    title: 'title 2',
    author: 'Rimus',
  },
];

/**
 * task-3
 * @param posts array
 * @param name string
 * @return object
 */
const getQuantityPostByAuthor = (posts, name) => {
  return posts.reduce((ak, post) => {
    if (post.author === name) {
      ak.posts++;
    }
    if (post.comments) {
      ak.comments += post.comments.filter(({author}) => author === name).length;
    }
    return ak;
  }, {posts: 0, comments: 0});
};

console.log(getQuantityPostByAuthor(listPosts, 'Rimus'));
