import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([])
	return (
		<div className="container contenedor p-3 mb-2 bg-light text-dark">
			<h1 class="text-secondary" className="todos">Todos</h1>
			<ul>
				<li>
					<input 
					class="fs-3 text-muted"
					type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
					if(e.key === "Enter") {
						setTodos(todos.concat([inputValue]));
						setInputValue("");
					}
					}}
					placeholder="What do you need to do?">

					</input>
				</li>
				{todos.map((item, index) => (
				<li className="tarea">
					{item}{" "} 
					<i 
					class="fas fa-trash-alt"
					onClick={() =>
					setTodos(
						todos.filter(
							(t, currentIndex) =>
							index != currentIndex
						)
					)}
					></i>
					</li>
				)
				)
				}
			</ul>
			<div className="contador">{todos.length} item left</div>
		</div>
	);
};

export default Home;
