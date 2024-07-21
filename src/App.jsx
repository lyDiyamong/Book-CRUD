import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
	const [books, setBooks] = useState([]);
	/*
	react won't update to the app component if they compare the original state 
	and the update state have the same reference, so react won't re-render
	*/
	// get all of the books in array
	const fetchBooks = async () => {
		// response is a new array
		const response = await axios.get('http://localhost:5174/books')
		setBooks(response.data)
	}

	// useEffect
	useEffect(() => {
		fetchBooks();
	}, [])

	// edit
	const editBookById = async (id, newTitle) => {
		const response = await axios.put(`http://localhost:5174/books/${id}`, {
			title: newTitle
		})
		
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return {... book, ...response.data};
			}
			return book
		})
		setBooks(updatedBooks)
	}
	// create
	const createBook = async (title) => {
		const response = await axios.post('http://localhost:5174/books' , {
			title
		})
		
		const updateBooks = [
			...books,
			response.data
			// { id: Math.floor(Math.random() * 10000), title: title },
		];
		/* 
		if using concat or spread operator it will be add to new address every times
		*/
		setBooks(updateBooks);
		
		
	};
	// delete
	const deleteBookById = async (id) => {
		await axios.delete(`http://localhost:5174/books/${id}`)
		const updateBooks = books.filter(book => {
			return book.id !== id
		})
		setBooks(updateBooks)
	}

	return (
		<div className="app text-2xl">
			<BookCreate onCreate={createBook} />
			<div className="px-6">
				<h1>Reading List</h1>
				<BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
			</div>
		</div>
	);
}

export default App;
