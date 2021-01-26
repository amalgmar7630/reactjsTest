import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const EditTodo = ({show, handleClose, onEditTodo, task}) =>{
    const [name, updateName] = useState(
        task.name
    );
    const [description, updateDescription] = useState(
        task.description
    );
    /**
     * Send the todo object to the todoItem component and close the modal
      * @param e
     */
    const onSubmitEditTask=(e)=>{
        e.preventDefault()
        if (!name) {
            alert('please add the name of the task')
        }
        const id = task.id
        onEditTodo({id, name, description})
        handleClose()
    }
    /**
     * Set value of name field
     * @param e
     */
    const  onEditName=(e)=>{
      updateName(e)
    }
    /**
     * Set Value od description field
     * @param e
     */
    const  onEditDescription=(e)=>{
        updateDescription(e)

    }
    return (
        <>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Task Name: </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name}
                                          onChange={(e)=>onEditName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Task Description: </Form.Label>
                            <Form.Control type="text" placeholder="Description" value={description}
                                          onChange={(e)=> onEditDescription(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onSubmitEditTask}>
                        Edit Task
                    </Button>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}
EditTodo.defaultProps = {
    show : PropTypes.bool.isRequired

}
export default EditTodo;
