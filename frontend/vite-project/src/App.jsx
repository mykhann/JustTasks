import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import { Login } from './components/auth/Login'
import UserContext from './context/UserContext'
import Signup from './components/auth/Signup'
import TasksContext, { TasksProvider } from './context/TasksContext'
import MyTasksPage from './components/tasks/MyTasksPage'

function App() {
  const [user, setUser] = useState(null)

  

  return (
   <>
   <TasksProvider>
   <UserContext.Provider value={{user,setUser}}>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login"element={<Login/>}/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/'element={<MyTasksPage/>}/>
    </Routes>
   </BrowserRouter>
   </UserContext.Provider>
   </TasksProvider>
   
     </>
  )
}

export default App
