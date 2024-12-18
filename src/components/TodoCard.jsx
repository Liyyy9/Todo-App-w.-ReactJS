import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodos, handleEditTodos, index, handleCompletedTodos } = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodos(index)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => handleDeleteTodos(index)}><i className="fa-regular fa-trash-can"></i></button>
                <button onClick={() => handleCompletedTodos(index)}><i class="fa-solid fa-check"></i></button>
            </div>
        </li>
    )
}
