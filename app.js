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
console.log(myLibrary);

myLibrary.push(newBook);

var bookContainer = document.getElementById("bookContainer");

// Create a div to contain the object properties
var bookInfoDiv = document.createElement("div");
bookInfoDiv.id = "bookInfo";

// Create paragraphs to display object properties
var authorElement = document.createElement("p");
authorElement.textContent = "Author: " + newBook.author;

var pagesElement = document.createElement("p");
pagesElement.textContent = "Pages: " + newBook.pages;

var readElement = document.createElement("p");
readElement.textContent = "Read: " + (newBook.read ? "Yes" : "No");

// Create a delete button
var deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", function() {
  bookContainer.removeChild(bookInfoDiv);
});

// Append the paragraphs and delete button to the div container
bookInfoDiv.appendChild(authorElement);
bookInfoDiv.appendChild(pagesElement);
bookInfoDiv.appendChild(readElement);
bookInfoDiv.appendChild(deleteButton);

// Append the div container to the main container element
bookContainer.appendChild(bookInfoDiv);
}

let addBook = document.querySelector("#add-book");

addBook.addEventListener("click", function(){

    let changeDisplay = document.querySelector("#book-form")
    
    changeDisplay.style.display = "block";
})

document.querySelector("#book-form").addEventListener("submit", function(event){
  
  let changeDisplay = document.querySelector("#book-form")
    
  changeDisplay.style.display = "none";
  event.preventDefault();

  addBookToLibrary();
  render();


})

