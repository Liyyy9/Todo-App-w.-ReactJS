import { useEffect, useState } from "react"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"
import CompletedCard from "./components/CompletedCard"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [completedTodos, setCompletedTodos] = useState([])

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function persistCompletedData(newList) {
    localStorage.setItem('completed', JSON.stringify({ completed: newList }))
  }


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleCompletedTodos(index) {
    const taskToComplete = todos[index]
    const newCompletedTodos = [...completedTodos, taskToComplete]
    setCompletedTodos(newCompletedTodos)
    persistCompletedData(newCompletedTodos)
    handleDeleteTodos(index)
  }

  function handleDeleteCompletedTodos(index) {
    const newCompletedList = completedTodos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistCompletedData(newCompletedList)
    setCompletedTodos(newCompletedList)
  }

  function handleEditCompletedTodos(index) {
    const taskToEdit = completedTodos[index]
    const editCompletedTask = [...todos, taskToEdit]
    setTodos(editCompletedTask)
    persistData(editCompletedTask)
    handleDeleteCompletedTodos(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    // Load todos 
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

    // Load Completedtodos
    let localCompletedTodos = localStorage.getItem('completed');
    if(!localCompletedTodos) return;
    localCompletedTodos = JSON.parse(localCompletedTodos).completed;
    setCompletedTodos(localCompletedTodos)

  }, []) // empty array so it stores after every refresh

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} handleCompletedTodos={handleCompletedTodos} />
      <h3 className="title">Completed Tasks</h3>
      <CompletedCard completedTodos={completedTodos} handleDeleteCompletedTodos={handleDeleteCompletedTodos} handleEditCompletedTodos={handleEditCompletedTodos}/>
    </>
  )
}

export default App
