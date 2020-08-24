import React from "react";

import "./global.css";

function App() {
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
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>{" "}
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>{" "}
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>{" "}
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>{" "}
					<div className="todo">
						<input type="checkbox" />
						<p>Content</p>
					</div>
				</div>
				<form>
					<span>Create a to do</span>
					<input type="text" />
					<button>Create</button>
				</form>
			</main>
		</div>
	);
}

export default App;
