import React from 'react';
import './App.css';
import CustomInput from './components/CustomInput/CustomInput';
import ToDo from './components/ToDo/ToDo';

function App() {
	const [searchInput, setSearchInput] = React.useState('');
	const [allTodos, setAllTodos] = React.useState([]);

	const onChangeInput = (e) => {
		const value = e.target.value;

		setSearchInput(value);
	};

	const onAddTodo = (e) => {
		e.preventDefault();

		if (searchInput === '') return;

		const newTodo = {
			id: searchInput,
			todo: searchInput,
		};

		setAllTodos([...allTodos, newTodo]);
		setSearchInput('');
	};

	const onDeleteTodo = (id) => {
		const filterArray = allTodos.filter((todo) => todo.id !== id);

		setAllTodos(filterArray);
	};

	return (
		<main className="App">
			<h1>My To Do List</h1>
			<div className="ToDoContainer">
				<CustomInput inputValue={searchInput} onChangeHandler={onChangeInput} addTodo={onAddTodo} />
				<div>
					{allTodos.map((todo) => (
						<ToDo onDeleteHandler={() => onDeleteTodo(todo.id)} todo={todo.todo} key={todo.id} />
					))}
				</div>
			</div>
		</main>
	);
}

export default App;
