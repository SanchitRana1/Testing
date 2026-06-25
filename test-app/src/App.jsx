
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'
import Contact from './components/Contact'
import UserProvider from './context/UserProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
