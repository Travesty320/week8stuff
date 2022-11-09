import React, { useState } from "react";
import './views.css';

function Todolist() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };


  return (
    <>
      <div className="input-group mb-3 justify-content-center mt-5">
        <form>
          <input className="task" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="To-Do?" aria-label="Users to-do" aria-describedby="button-addon2" />
          <button onClick={() => addTodo(input)} className="btn1 btn-outline-secondary" type="button" id="button-addon2">Add</button>
        </form>
      </div><br></br>
      <div>
        <ul>
          <form>
            {list.map((todo) => (
              <li className="card" key={todo.id}>
                {todo.todo}
                <button className="btn2" onClick={() => deleteTodo(todo.id)}>&times;</button>
              </li>
            ))}
          </form></ul>
      </div>


    </>
  );

}

export default Todolist
