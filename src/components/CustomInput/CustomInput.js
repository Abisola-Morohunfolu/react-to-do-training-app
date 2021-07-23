import classes from './CustomInput.module.css';

const CustomInput = (props) => {
	return (
		<form className={classes.Form}>
			<input type="text" placeholder="Add a new task" />
			<button type="submit">Add Task</button>
		</form>
	);
};

export default CustomInput;
