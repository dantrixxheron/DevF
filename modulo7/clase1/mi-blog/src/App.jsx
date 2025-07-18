import './App.css'
import ArticulosBlog from './Components/ArticulosBlog'
import ContenidoPrivado from './Components/ContenidoPrivado'
import Header from './Components/Header'
import Login from './Components/Login'
import { UserProvider } from './Context/UserContext'
function App() {
  return (
    <UserProvider>
      <Header />
      <Login />
      <ContenidoPrivado />
    </UserProvider>
  )
}

export default App
