import React from 'react'

export default function TodoItem({todo}) {
    return (
        <li>
            <h2>{todo.title}</h2>  
            <p>{todo.content}</p>
        </li>
    )
}
