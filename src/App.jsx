import Signin from "./components/forms/Signin";
import Signup from "./components/forms/Signup";
import Dashboard from "./components/dashboard/Dashboards";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Batch from "./components/dashboard/Batch/Batch";
import Course from "./components/dashboard/Course/Course";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/signin"} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path="batches" element={<Batch />} />
          <Route path="courses" element={<Course />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
