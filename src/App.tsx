import React, { useState, FormEvent } from "react";
import Todo from "./components/Todo";

import "./global.css";

function App() {
	const [todoList, setTodoList] = useState<String[]>([]);
	const [input, setInput] = useState("");

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();
		if (todoList.includes(input)) alert("Esse todo já existe");
		else setTodoList([...todoList, input]);
		setInput("");
	}

	function handleDeleteTodo(index: number) {
		const newTodoList = todoList.filter(
			(item) => index !== todoList.indexOf(item)
		);
		setTodoList(newTodoList);
	}

	return (
		<div>
			<header>
				<div className="container">
					<h2>To do App</h2>
				</div>
			</header>
			<main className="container">
				<h1>To do List</h1>
				<div className="todo-container">
					{todoList.map((item, index) => (
						<Todo
							todo={String(item)}
							index={index}
							handleDeleteTodo={handleDeleteTodo}
						/>
					))}
				</div>
				<form onSubmit={handleFormSubmit}>
					<span>Create a to do</span>
					<input
						type="text"
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
					<button>Create</button>
				</form>
			</main>
		</div>
	);
}

export default App;
