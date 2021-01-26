import PropTypes from 'prop-types'
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import TodoItem from "./todoItem";

const Todos = ({todos, onCompleteTodo, onDeleteTodo, onEditTodo}) =>{
    return (
        <>
            <ListGroup className='pt-4 w-75 mx-auto'>
                {
                    todos.map((todo)=> (
                        <TodoItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo}/>
                    ))
                }
            </ListGroup>
        </>

    )
}
Todos.defaultProps = {

}
Todos.propTypes = {
  todos : PropTypes.array.isRequired
}
export default Todos;
