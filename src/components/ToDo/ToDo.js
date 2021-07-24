import './ToDo.css';
import Button from '../Button/Button';

const ToDo = (props) => {
	return (
		<div className="Todo">
			<h4>{props.todo}</h4>
			<Button label="Delete" clicked={props.onDeleteHandler} />
		</div>
	);
};

export default ToDo;
