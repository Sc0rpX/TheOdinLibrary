# The Odin Library

A personal library application built as part of [The Odin Project's Full Stack JavaScript](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript) curriculum. This project focuses on Object-Oriented Programming (OOP) concepts in JavaScript.

## 🔗 Live Preview
Check out the live version here: **[The Odin Library](https://sc0rpx.github.io/TheOdinLibrary/)**

## 📚 About the Project
This application allows users to organize their book collection dynamically. Users can add new books, track their reading progress, and manage their library directly from the browser.

### Key Features
* **Add Books:** A clean modal interface to input book details including Title, Author, Page Count, and Cover Image URL.
* **Library Display:** Dynamically renders book cards in a grid layout.
* **Read Status:** Toggle whether a book has been read or not.
* **Remove Books:** Delete books from the collection.

## 🧠 What I Learned
Building this project was a practical exercise in core JavaScript concepts, specifically:

* **Object Constructors:** Learned to define a `Book` constructor to efficiently create multiple book instances with standardized properties.
* **Prototypes:** Utilized `Book.prototype` to add methods (like toggling read status) to objects. This demonstrated how to share functions across all instances to optimize memory usage, rather than defining them within the constructor.
* **Data Management:** Managed the application state using an array of objects and iterated through it to render the DOM.
* **DOM Manipulation:** Gained experience in handling form data, toggling modal visibility, and creating HTML elements dynamically via JavaScript.

## 🛠️ Built With
* HTML5
* CSS3
* JavaScript (ES6+)