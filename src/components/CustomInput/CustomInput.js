import './CustomInput.css';

const CustomInput = (props) => {
	return (
		<form className="Form" onSubmit={props.addTodo}>
			<input
				type="text"
				placeholder="Add a new todo"
				required
				value={props.inputValue}
				onChange={props.onChangeHandler}
			/>
			<button type="submit" onClick={props.addTodo}>
				Add Todo
			</button>
		</form>
	);
};

export default CustomInput;
