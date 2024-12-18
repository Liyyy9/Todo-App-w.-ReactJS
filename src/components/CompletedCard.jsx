import React from 'react'

export default function CompletedCard(props) {
    const { completedTodos, handleDeleteCompletedTodos, handleEditCompletedTodos } = props

    return (
        <ul className='main'>
            {completedTodos.length > 0 ? (
                completedTodos.map((todo, index) => (
                    <li key={index} className='todoItem'>
                        <p>{todo}</p>
                        <div className='actionsContainer'>
                            <button onClick={() => handleEditCompletedTodos(index)}><i class="fa-solid fa-rotate-left"></i></button>
                            <button onClick={() => handleDeleteCompletedTodos(index)}><i className="fa-regular fa-trash-can"></i></button>
                        </div>
                    </li>
                ))
            ) : (
                <p>No completed tasks yet.</p>
            )}
        </ul>
    )
}
