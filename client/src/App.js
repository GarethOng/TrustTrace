import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Donator from './pages/Donator'
import Ngo from './pages/Ngo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/donator' element={<Donator/>} />
        <Route path='/ngo' element={<Ngo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
