const data = [
  {
    id: "1",
    title: "Agile Web Development with Rails",
    author: "Sam Ruby, Dave Thomas, David Heinemeier Hansson",
    categories: "Web development",
    volume: "",
    year: "2010",
    edition: "Fourth Edition",
    language: "en",
    extension: "pdf",
    pages: "472",
    filesize: "6937523",
    series: "",
    periodical: "",
    file_extension: "pdf",
    url: "http://bookzz.org/dl/1159142/643c75",
    description: "",
    cover:
      "http://libgen.org/covers/721000/ae49d9bb94118632df0691df18706319-g.jpg",
  },
  {
    id: "2",
    title: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    categories: "Computer Science",
    volume: "1",
    year: "2009",
    edition: "Third Edition",
    language: "en",
    extension: "pdf",
    pages: "1312",
    filesize: "10568792",
    series: "",
    periodical: "",
    file_extension: "pdf",
    url: "http://bookzz.org/dl/1234567/abcdef",
    description: "",
    cover:
      "http://libgen.org/covers/721000/1234567890abcdef1234567890abcdef-g.jpg",
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id == id);
}

//Destructuring

const books = getBooks();
const { title, author } = getBook(2);

console.log("Title  : ", title, "\nAuthor : ", author);
