let myLibrary = [];
function Book(name,author,pages,read) {
     this.name = name;
     this.author = author;
     this.pages = pages;
     this.read = read;

}

function addBookToLibrary() {
  let name = document.querySelector("#book-name").value;
  let author = document.querySelector("#book-author").value;
  let pages = document.querySelector("#book-pages").value;
  let read = document.querySelector("#book-checkmark").checked;
let newBook = new Book(name,author,pages,read);
console.log(newBook);



}

let addBook = document.querySelector("#add-book");

addBook.addEventListener("click", function(){

    let changeDisplay = document.querySelector("#book-form")
    
    changeDisplay.style.display = "block";
})

document.querySelector("#book-form").addEventListener("submit", function(){
  
  event.preventDefault();

  addBookToLibrary();


})