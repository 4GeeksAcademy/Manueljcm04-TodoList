import React, { useState } from "react";

//create your first component
export const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div className="container">
            <h1>My todos {inputValue}</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key == 13) {
                                setTodos(todos.concat(inputValue));
                            }
                        }}
                        placeholder="What do you need to do?">

                    </input>
                </li>
                <li>Make the beg <i class="fas fa-trash-alt"></i></li>
                <li>Walk the dog <i class="fas fa-trash-alt"></i></li>
                <li>Pay takes <i class="fas fa-trash-alt"></i></li>
                <li>Go on vacation <i class="fas fa-trash-alt"></i></li>
            </ul>
            <div>23 tasks</div>
        </div>
    );
};
