import { TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";
import React from "react";

const EditTodoForm = ({id, task, editTodo}) => {
    const [value, handleChange, reset] = useInputState(task)
    const submitForm = (e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
    }
    return (
        <form onSubmit={submitForm}
            style={{
                marginLeft: "1rem",
                width: "50%",
            }}>
            <TextField
                onChange={handleChange}
                value={value}
                fullWidth
                autoFocus />
        </form>
    )
}

export default EditTodoForm;