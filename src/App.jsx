import Signin from "./components/forms/Signin";
import Signup from "./components/forms/Signup";
import Dashboard from "./components/dashboard/Dashboards";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Batch from "./components/dashboard/Batch/Batch";
import Course from "./components/dashboard/Course/Course";
import NewBatch from "./components/dashboard/Batch/Newbatch";
import BatchDetails from "./components/dashboard/Batch/BatchDetails";
import Students from "./components/dashboard/students/Students";
import Instructor from "./components/dashboard/instructor/Instructor";
import StudyMaterials from "./components/dashboard/studymaterial/StudyMaterials";
import NewMaterial from "./components/dashboard/studymaterial/NewMaterial";
import ViewMaterial from "./components/dashboard/studymaterial/ViewMaterial";

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
          <Route path="students" element={<Students />} />
          <Route path="instructors" element={<Instructor />} />
          <Route path="study-materials" element={<StudyMaterials />} />
          <Route path="study-materials/:batchId" element={<ViewMaterial />} />
          <Route path="new-material" element={<NewMaterial />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
