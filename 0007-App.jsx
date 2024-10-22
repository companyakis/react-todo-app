import './App.css'

import TodoCreate from './components/TodoCreate'

import TodoList from './components/TodoList'

function App() {

  const createTodo = (todotitle, tododescription) => {
    console.log(todotitle, tododescription)
  }
  

  return (
    <div className='App'>
      <TodoCreate onCreate={createTodo} />
      <TodoList/>
    </div>

  )
}

export default App
