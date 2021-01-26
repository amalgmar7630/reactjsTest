import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";

const AddTodo = ({onAddTodo}) =>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    /**
     * Send submitted object to Home component and reset form
     * @param e
     */
    const onSubmitTask=(e)=>{
        e.preventDefault()
        if (!name) {
            alert('please add the name of the task')
        }
        onAddTodo({name, description})
        setName('')
        setDescription('')
    }
    /**
     * Set the name value on change event
      * @param e
     */
    const  onAddName=(e)=>{
        setName(e)
    }
    /**
     * Set the description value on change event
     * @param e
     */
    const  onAddDescription=(e)=>{
        setDescription(e)
    }
    return (
        <div className="mt-5 w-75 mx-auto">
            <h3>Create new Task</h3>
            <Form className="form-inline" onSubmit={onSubmitTask}>
                <Form.Group className="col-md-4" controlId="formBasicText">
                    <Form.Label>Task Name: </Form.Label>
                    <Form.Control className="w-100" type="text" placeholder="Enter name" value={name}
                                  onChange={(e)=>onAddName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="col-md-6" controlId="formBasicDescription">
                    <Form.Label>Task Description: </Form.Label>
                    <Form.Control className="w-100" type="text" placeholder="Description" value={description}
                                  onChange={(e)=> onAddDescription(e.target.value)}/>
                </Form.Group>
                <Button className="col-md-2 mt-4" variant="primary" type="submit">
                    Add Task
                </Button>
            </Form>
        </div>

    )
}
export default AddTodo;
