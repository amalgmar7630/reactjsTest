import PropTypes from 'prop-types'
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import EditTodo from "./edittodo";

const TodoItem = ({todo, onCompleteTodo, onDeleteTodo, onEditTodo}) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ListGroup.Item className="d-flex justify-content-between align-items-center" key={todo.id}>
                <div className="text-left">
                    <h6>{todo.name}:</h6> <p>{todo.description}</p>
                </div>
                <div>
                    <span className="badge badge-warning badge-pill cursor-pointer" onClick={() => handleShow()}><FontAwesomeIcon icon={faEdit} size="lg" /></span>
                    <span className="ml-2 badge badge-danger badge-pill cursor-pointer" onClick={() => onDeleteTodo(todo.id)}><FontAwesomeIcon icon={faTrash} size="lg" /></span>
                    {
                        todo.completed ? <span className="ml-2 badge badge-primary badge-pill cursor-pointer" onClick={()=>onCompleteTodo(todo.id)}>Completed</span>:
                            <span className="ml-2 badge badge-danger badge-pill cursor-pointer" onClick={()=>onCompleteTodo(todo.id)}>Not Completed</span>
                    }
                </div>
            </ListGroup.Item>
            <EditTodo show={show} handleClose={handleClose} task={todo} onEditTodo={onEditTodo}/>

        </>

    )
}
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired

}
export default TodoItem;
