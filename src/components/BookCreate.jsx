import React from 'react'
import { useState } from 'react'
import '../index.css'
function BookCreate({onCreate}) {
  	const [title, setTitle] = useState('')
	
	const handleChange = (event) => {
		setTitle(event.target.value)
        // console.log(event);
		// to capture each of title change cuz title we set it as empty string
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreate(title)
		setTitle('')
	}
	return (
		<div className='bg-blue-950 text-white p-[15px]'>
			<h3 className='font-bold'>Add a Book</h3>
			<form onSubmit={handleSubmit} className='flex flex-col gap-3' >
				<label >Title:</label>
				<input value={title} onChange={handleChange} className=' border border-slate-300 w-[400px] rounded-lg text-blue-500 p-2' />
				<button className='p-3 bg-blue-300 w-[100px] rounded-md' >Create!</button>
			</form>
		</div>
		
	)
}

export default BookCreate