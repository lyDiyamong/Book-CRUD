import React from "react";
import "../index.css";
import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        /*
         has two param (id, newTitle)
        */
       onSubmit(book.id, title)
    };
    return (
        <form onSubmit={handleSubmit} className="book-edit flex flex-col gap-2">
            <label>Title:</label>
            <input value={title} onChange={handleChange} className="w-10/12 rounded-lg p-2" />
            <button className="save-button bg-blue-950 text-white rounded-md p-2 w-[80px]">
                Save
            </button>
        </form>
    );
}

export default BookEdit;
