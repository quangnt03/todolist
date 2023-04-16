import { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
	const [input, setInput] = useState('');

	const onInput = (e) => {
		console.dir(e);
		setInput(e.target.value);
	};

	const onKeydown = (e) => {
		if (e.key === 'Enter') {
			onAddNewTodo();
		}
	};

	const onAddNewTodo = () => {
		if (input.trim()) {
			onAddTodo(input);
		}
		setInput('');
	};

	return (
		<div className='flex flex-row justify-start items-center h-20 border-green-400'>
			<button
				className='flex items-center w-5 h-8 ml-2 my-3 text-3xl text-center text-blue-600 disabled:text-gray-600'
				onClick={onAddNewTodo}
				disabled={input.trim() === ''}>
				+
			</button>
			<input
				value={input}
				onChange={onInput}
				onKeyDown={onKeydown}
				className='flex-grow h-8 ml-3 pt-0.5 pl-2 bg-transparent text-lg rounded-lg focus:border focus:outline-none focus:border-blue-500 hover:border-green-500'
				type='text'
				placeholder='add a new task'
			/>
		</div>
	);
}
