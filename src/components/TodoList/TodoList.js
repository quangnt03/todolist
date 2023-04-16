import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ todos, onItemChecked, onItemRemoved }) {
	return (
		<>
			<ul className='max-w flex flex-col'>
				{todos &&
					todos.map((todo) => (
						<li
							key={todo.id}
							className='inline-flex items-center justify-center gap-x-2 h-12 mb-4 text-xl font-md bg-white border text-gray-800 -mt-px rounded-lg hover:border-green-500 hover:transition-all'>
							<TodoItem
								{...todo}
								onItemChecked={onItemChecked}
								onItemRemoved={onItemRemoved}
							/>
						</li>
					))}
			</ul>
		</>
	);
}
