import React from "react";
import BookShow from "./BookShow";
import "../index.css";

function BookList({ books, onDelete }) {
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} />;
    });
    return <div className="my-[60px] book-list grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">{renderBooks} </div>;
}

export default BookList;
