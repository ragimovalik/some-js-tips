import { library } from "./library.js";

// Just for primitives. Get array from object first (via flatMap()).

const listOfAuthors = library.flatMap(({ authors }) => authors);

// #1 - .filter.
/* array.indexOf(author) - ищем первое совпадение и получаем индекс этого элемента.
Сравниваем с индексом текущего элемента из параметра idx.
При совпадении - уникальный элемент (встречается впервые).
В противном случае такой элемент не уникальный (его индекс встречался ранее)
*/

const authorsListFilter = listOfAuthors.filter(
  (author, idx, array) => array.indexOf(author) === idx
);

// console.log(authorsListFilter);

// #2 - .reduce. Get array from object first (via flatMap()).

const authorsListReduce = listOfAuthors.reduce((shelf, author) => {
  return shelf.includes(author) ? shelf : [...shelf, author];
}, []);

// console.log(authorsListReduce);

// #3 - use Set

const authorsListSet = [...new Set(listOfAuthors)];

// console.log(authorsListSet);