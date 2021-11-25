import React from "react";
import TodoItem from "./TodoItem";
import { Divider, Paper, List } from "@material-ui/core";

const TodoList = ({todos, toggle, editTodo, deleteTodo}) => {

    return(
        <Paper>
            <List>
                {todos.map((todo, i) => {
                    return (
                        <>
                            <TodoItem 
                                key={i}
                                todo={todo} 
                                toggle={toggle}
                                editTodo={editTodo}
                                deleteTodo={deleteTodo}
                            />
                            {i < todos.length - 1 && <Divider/>}
                        </>
                    )
                })}
            </List>

        </Paper>
    )
}

export default TodoList;