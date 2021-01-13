export const library = [
  {
    bookshelf: "Alfa",
    authors: [
      "Daniel Defoe",
      "William Shakespeare",
      "Benjamin Disraeli",
      "Robert Stevenson",
      "Thomas Hardy",
      "Conan Doyle",
      "Rudyard Kipling",
    ],
  },
  {
    bookshelf: "Bravo",
    authors: [
      "John Locke",
      "John Milton",
      "Thomas Hardy",
      "William Shakespeare",
    ],
  },
  {
    bookshelf: "Charlie",
    authors: [
      "Charles Dickens",
      "Jonathan Swift",
      "Walter Scott",
      "Conan Doyle",
      "Rudyard Kipling",
    ],
  },
  {
    bookshelf: "Delta",
    authors: [
      "Charlotte Brontë",
      "Jonathan Swift",
      "Thomas Hobbes",
      "John Locke",
      "William Shakespeare",
      "Jerome Klapka Jerome",
    ],
  },
];

// all of authors array

const allAuthors = library.flatMap(({ authors }) => authors);

// console.log(allAuthors);