import Signin from "./components/forms/Signin";
import Signup from "./components/forms/Signup";
import Dashboard from "./components/dashboard/Dashboards";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/signin"}/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
