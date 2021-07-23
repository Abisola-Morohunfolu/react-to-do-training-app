import './App.css';
import CustomInput from './components/CustomInput/CustomInput';

function App() {
	return (
		<main className="App">
			<h1>My To Do List</h1>
			<div className="ToDoContainer">
				<CustomInput />
			</div>
		</main>
	);
}

export default App;
