import React from "react";
import { useState } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
	const [books, setBooks] = useState([]);
	/*
	react won't update to the app component if they compare the original state 
	and the update state have the same reference, so react won't re-render
	*/
	// edit
	const editBookById = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return {... book, title : newTitle};
			}
			return book
		})
		setBooks(updatedBooks)
	}
	// create
	const createBook = (title) => {
		const updateBooks = [
			...books,
			{ id: Math.floor(Math.random() * 10000), title: title },
		];
		/* 
		if using concat or spread operator it will be add to new address every times
		*/
		setBooks(updateBooks);
		console.log(updateBooks);
	};
	// delete
	const deleteBookById = (id) => {
		const updateBooks = books.filter(book => {
			return book.id !== id
		})
		setBooks(updateBooks)
	}

	return (
		<div className="app text-2xl">
			<BookCreate onCreate={createBook} />
			<div className="px-6">
				<BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
			</div>
		</div>
	);
}

export default App;
