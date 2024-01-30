function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

let book1 = new Book("javascript","Rk",1999);
let book2 = new Book("java","Pk",2000);

console.log(book1);
console.log(book2.year);