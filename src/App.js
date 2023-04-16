import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import './App.css';

function App() {
	const [todolist, setTodolist] = useState([]);
	const onAddTodo = (title) => {
		const newTodo = {
			id: v4(),
			title,
			isDone: false,
		};
		setTodolist((prevList) => [newTodo, ...prevList]);
	};

	const onItemChecked = (itemId) => {
		const itemIndex = todolist.findIndex(({ id }) => id === itemId);
		const newTodo = [...todolist];
		const newTodoItem = {
			...newTodo[itemIndex],
			isDone: !newTodo[itemIndex].isDone,
		};
		newTodo[itemIndex] = newTodoItem;
		setTodolist(newTodo);
	};

	const onItemRemoved = (itemId) => {
		const newTodo = todolist.filter((item) => item.id !== itemId);
		setTodolist(newTodo);
	};

	useEffect(() => {
		const todoFromLocal = localStorage.getItem('todos');
		if (todoFromLocal) {
			setTodolist(JSON.parse(todoFromLocal));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todolist));
	}, [todolist]);

	return (
		<div className='flex items-center justify-center w-screen h-screen transition-all '>
			<div className='flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100'>
				{/* Component Start */}
				<div className='max-w-full px-7 pt-10 py-10 bg-white rounded-lg shadow-lg w-1/3 h-screen'>
					<Header appName={'Todo list'} />
					<TodoForm onAddTodo={onAddTodo} />
					<TodoList
						todos={todolist}
						onItemChecked={onItemChecked}
						onItemRemoved={onItemRemoved}
					/>
				</div>
				{/* Component End  */}
			</div>
		</div>
	);
}

export default App;
