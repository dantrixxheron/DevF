import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PostList from './Pages/PostList'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CreatePost from './Pages/CreatePost'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App