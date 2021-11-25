import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import useToggle from "../hooks/useToggle";
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import EditTodoForm from "./EditTodoForm";

const TodoItem = ({todo, toggle, editTodo, deleteTodo}) => {
    const toggleTodo = () => {
        toggle(todo, !todo.completed)
    }

    const changeTask = (todo, task) => {
        editTodo(todo, task);
        setEditing(false);
    }

    const [isEditing, setEditing] = useToggle(false);

    return (
        <>
            <ListItem style={{height: "64px"}}>
                {isEditing 
                    ?  <EditTodoForm 
                            id={todo.id} 
                            task={todo.task}
                            editTodo={changeTask}
                        />
                    : (
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <div>
                                <Checkbox checked={todo.completed}
                                    onChange={toggleTodo}
                                />
                                {todo.task}
                            </div>
                            <div>
                                <EditIcon onClick={setEditing} />
                                <DeleteIcon onClick={deleteTodo} />
                            </div>
                        </div>
                    )
                }
            </ListItem>
        </>
    )
}

export default TodoItem