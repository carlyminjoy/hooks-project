import { Paper, TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";
import React from "react";

const TodoForm = ({addTodo}) => {
    const [value, handleChange, reset] = useInputState("")
    const submitForm = (e) => {
        e.preventDefault()
        addTodo(value);
        reset();
    }
    return (
        <Paper>
            <form onSubmit={submitForm}>
                <TextField style={{width: '100%', height: '64px'}}
                    onChange={handleChange}
                    value={value}/>
            </form>
        </Paper>
    )
}

export default TodoForm;