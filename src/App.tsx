import React, { useState, FormEvent } from "react";

import "./global.css";

const todoList: String[] = [];

function App() {
	const [input, setInput] = useState("");

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();
		todoList.push(input);
		setInput("");
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
					{todoList.map((item) => (
						<div className="todo">
							<input type="checkbox" />
							<p>{item}</p>
						</div>
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
