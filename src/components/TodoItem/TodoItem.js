import { TiDeleteOutline } from 'react-icons/ti';

export default function TodoItem({
	id,
	title,
	isDone,
	onItemChecked,
	onItemRemoved,
}) {
	return (
		<div
			className={`relative flex items-center p-3 w-full h-full ${
				isDone && 'bg-gray-200'
			}`}>
			<div className='flex items-center h-5'>
				<input
					checked={isDone}
					onChange={() => onItemChecked(id)}
					id={id}
					type='checkbox'
					className='border-gray-200 rounded-full accent-green-400 h-4 w-4'
				/>
			</div>
			<label
				htmlFor={id}
				className={`ml-3.5 block w-full text-gray-600 ${
					isDone && 'line-through opacity-80'
				}`}>
				{title}
			</label>
			<button
				className='text-red-800 font-lg opacity-50 hover:opacity-100'
				onClick={() => onItemRemoved(id)}>
				<TiDeleteOutline fontSize={30} />
			</button>
		</div>
	);
}
