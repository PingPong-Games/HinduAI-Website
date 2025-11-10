import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import PrivacyPolicy from './PrivacyPolicy'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
