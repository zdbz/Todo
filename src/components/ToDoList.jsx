import React from "react";
import Todo from "./Todo";
import FlipMove from "react-flip-move";


const ToDoList = ({ setTodos, todos, filteredTodos }) => {
  return (
      <FlipMove duration ={300} easing="ease-in-out" >
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <div>
            <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
          </div>
        ))}

        {/* <Todo/> */}
      </ul>
    </div>
    </FlipMove>
  );
};

export default ToDoList;
