import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Donator from './pages/Donator'
import Ngo from './pages/Ngo'
import Regulator from './pages/Regulator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/donator' element={<Donator/>} />
        <Route path='/ngo' element={<Ngo />} />
        <Route path='/regulator' element={<Regulator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
