import React from "react";
import { FiTrash } from "react-icons/fi";

interface ITodo {
	todo: string;
	index: number;
	handleDeleteTodo: Function;
}

const Todo: React.FC<ITodo> = ({ todo, index, handleDeleteTodo }) => {
	return (
		<div className="todo">
			<input type="checkbox" />
			<p>{todo}</p>
			<FiTrash
				style={{
					position: "absolute",
					width: "20px",
					height: "20px",
					right: "20px",
					color: "var(--text-color)",
					cursor: "pointer",
					justifySelf: "flex-start",
				}}
				onClick={() => handleDeleteTodo(index)}
			/>
		</div>
	);
};

export default Todo;
