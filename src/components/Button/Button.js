import './Button.css';

const Button = (props) => {
	return (
		<button onClick={props.clicked} className="Button">
			{props.label}
		</button>
	);
};

export default Button;
