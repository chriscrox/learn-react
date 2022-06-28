import Reactr from 'react';

export default function TodoList({ todos, toggletTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}