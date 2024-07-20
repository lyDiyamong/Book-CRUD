import React from 'react'
import "../index.css";

function BookShow({ book }) {

  return (
    <div className='text-center bg-slate-300 h-[300px] rounded-xl border border-black' >{book.title}</div>
  )
}

export default BookShow