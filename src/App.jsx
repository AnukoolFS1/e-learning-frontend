import Signin from "./components/forms/Signin";
import Signup from "./components/forms/Signup";
import Dashboard from "./components/dashboard/Dashboards";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Batch from "./components/dashboard/Batch/Batch";
import Course from "./components/dashboard/Course/Course";
import NewBatch from "./components/dashboard/Batch/Newbatch";
import BatchDetails from "./components/dashboard/Batch/BatchDetails";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path="batches" element={<Batch />} />
          <Route path="batches/:batchId" element={<BatchDetails />} />
          <Route path="new-batch" element={<NewBatch />} />
          <Route path="courses" element={<Course />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
