import React, { useState } from "react";
import BookEdit from "./BookEdit";
import "../index.css";

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDelete = () => {
        onDelete(book.id)
    }

    const handleEdit = () => {
        setShowEdit(!showEdit)
        // toggle true false for showing the component
    }

    let content = <h3>{book.title} </h3>
    if (showEdit) {
        // if not showing the edit the edit will show when click
        content = <BookEdit book={book} onEdit={onEdit} toggleForm={setShowEdit} />
    }

    return (
        <div className=" bg-slate-300 h-[300px] rounded-xl border border-black relative p-4">
            <div>{content}</div>
            <div className="actions absolute right-4 flex gap-1">
                <button className="edit" onClick={handleEdit}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8508 2.70833 14.0525 2.625C14.2542 2.54167 14.4658 2.5 14.6875 2.5C14.9092 2.5 15.1244 2.54167 15.3333 2.625C15.5422 2.70833 15.7228 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.3092 4.5 17.3858 4.70833C17.4625 4.91667 17.5006 5.125 17.5 5.33333C17.5 5.55556 17.4619 5.7675 17.3858 5.96917C17.3097 6.17083 17.1881 6.35472 17.0208 6.52083L6.04167 17.5H2.5ZM14.6667 6.5L15.8333 5.33333L14.6667 4.16667L13.5 5.33333L14.6667 6.5Z" fill="black"/>
                    </svg>
                </button>
                <button className="delete" onClick={handleDelete}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7498 2.5H18.3332L6.24984 17.5H1.6665L13.7498 2.5Z" fill="black" stroke="white" stroke-width="1.66667" stroke-linejoin="round"/>
                        <path d="M6.24984 2.5H1.6665L13.7498 17.5H18.3332L6.24984 2.5Z" fill="black" stroke="white" stroke-width="1.66667" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="title">
                <h2 className="text-blue-400">{book.title}</h2>
            </div>
        </div>
    );
}

export default BookShow;
