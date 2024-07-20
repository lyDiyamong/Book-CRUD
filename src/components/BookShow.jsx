import React from "react";
import "../index.css";

function BookShow({ book, onDelete }) {
    const handleDelete = () => {
        onDelete(book.id)
    }
    return (
        <div className="text-center bg-slate-300 h-[300px] rounded-xl border border-black">
            <div className="action">
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
            <div className="title">
                <h2>{book.title}</h2>
            </div>
        </div>
    );
}

export default BookShow;
