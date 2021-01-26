import React, { useState } from 'react';
import Todos from "./todos";
import AddTodo from "./addtodo";
/**
 * This function returns randomly an integer with max value
 * @param max: integer
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function Home() {
    const [todos, setTodos] = useState([
        {id: 1, name: 'Send Email', description: 'to the team', completed: true},
        {id: 2, name: 'Do Exercise', description: 'React Only', completed: false}]);
    /**
     *  Updates the Todo list with the complete value of one element
     * @param id: id of updated todo element
     * */
    const onCompleteTodo = (id) => {
        const newTodoList = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(newTodoList)
    }
    /**
     * Updates the Todo list with adding new element
     * @param todo: object with this format { name: name1, description: description1}
     */
    const onAddTodo = (todo) => {
        const id = getRandomInt(1000)
        const completed = false;
        const newTask = {id, completed, ...todo}
        setTodos([...todos, newTask])

    }
    /**
     * Updates the Todo list after deleting one item
     * @param id: id of the deleted object
     */
    const onDeleteTodo = (id) => {
        const filteredTodos = todos.filter(f => f.id !== id);
        setTodos(filteredTodos)
    }
    /**
     * Updates the Todo list after editing one object
      * @param todo: object with format { id: 1, name: name1, description: description1}
     */
    const onEditTodo = (todo) => {
        const index = todos.findIndex(t => t.id === todo.id),
            listTodos = [...todos] // important to create a copy, otherwise you'll modify state outside of setState call
        listTodos[index] = todo;
        setTodos(listTodos);

    }
    return (
        <>
            <h3>List of tasks</h3>
            {
                todos.length > 0 ?
                    <Todos todos={todos} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo}/>:
                    <div className="d-flex justify-content-center mt-4"><h6>No Available Tasks</h6></div>
            }
            <AddTodo onAddTodo={onAddTodo}/>
        </>
    );
}
export default Home;
