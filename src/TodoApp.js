import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./Todos/TodoList";
import TodoForm from "./Todos/TodoForm";

function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Clean", completed: false },
        { id: 2, task: "Eat", completed: true },
        { id: 3, task: "Wake up", completed: false }
    ]

    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const toggle = (todo, completed) => {
        setTodos([
            ...todos.map(t => {
                return t.id === todo.id 
                    ? { ...todo, completed}
                    : t
            })
        ])
    }

    const editTodo = (id, task) => {
        setTodos([
            ...todos.map(t => {
                return t.id === id 
                    ? { ...t, task}
                    : t
            })
        ])
    }

    const addTodo = (newTask) => {
        setTodos([
            ...todos,
            {
                id: todos[todos.length - 1].id + 1,
                task: newTask,
                completed: false
            }
        ])
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
            <AppBar color='primary'
                position='static'
                style={{
                    height: "64px"
                }}>
                <Toolbar>
                    <Typography color='inherit'>
                        TODOS WITH HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} toggle={toggle} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp