import { useEffect } from "react";
import { Outlet, useNavigate} from "react-router-dom";
import Sidebar from "./Sidebar"
import '../css/dashboard.css';
import { addBatches } from "../../redux/batchesSlice";
import { addCourses } from "../../redux/courseSlice";
import { addInstructor } from "../../redux/instructors";
import { addUser } from "../../redux/userSlice";
import { addStudents } from "../../redux/studentSlice";
import { useDispatch } from "react-redux";
import { addMaterials } from "../../redux/materialsSlice";

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData (){
            const response = await fetch('https://e-learning-backend-11lu.onrender.com/',{
                method: "GET",
                credentials: "include"
            })

            if(!response.ok) return navigate('/signin')
            const data = await response.json();
            dispatch(addUser(data.user));
            dispatch(addBatches(data.batches));
            dispatch(addCourses(data.courses));
            dispatch(addStudents(data.students)); 
            dispatch(addMaterials(data.studyMaterials))
            dispatch(addInstructor(data.instructors)); 
        }
        fetchData()
    }, [])
    return (
        <section className="dashboard">
            <Sidebar />
            <div className="context">
                <Outlet></Outlet>
            </div>
        </section>
    )
}

export default Dashboard