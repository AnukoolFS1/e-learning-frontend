import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/sidebar.css";
import { useSelector } from "react-redux";


const Sidebar = () => {
    const aside = {
        "admin": [
            { name: "Batches", route: "batches" },
            { name: "Courses", route: "courses" },
            { name: "Study Materials", route: "study-materials" },
            { name: "Students", route: "students" },
            { name: "Instructors", route: "instructors" },
            { name: "Log Out", route: "/" }],
        "instructor": [
            { name: "Batches", route: "batches" },
            { name: "Courses", route: "courses" },
            { name: "Study Materials", route: "study-materials" },
            { name: "Students", route: "students" },
            { name: "Log Out", route: "/" }],
        "student": [
            { name: "Batches", route: "batches" },
            { name: "Courses", route: "courses" },
            { name: "Study Materials", route: "study-materials" },
            { name: "Log Out", route: "/" }
        ]
    }
    const navigate = useNavigate();

    const path = useLocation().pathname.split('/')[2];

    const logout = async () => {
        await fetch("https://e-learning-backend-11lu.onrender.com/logout",{
            credentials:"include"
        })
        navigate("/")
    }   

    const user = useSelector(state => state.user.user)
    return (
        <aside className="sidebar">
            <ul>
                {
                    aside[user.role]?.map(e => {
                        return (<li key={e.name} style={{backgroundColor:path===e.route? "#565872":""}}>
                            {e.name === "Log Out"? <Link onClick={logout}>{e.name}</Link>:
                            <Link to={e.route}>{e.name}</Link>
                            }
                        </li>)
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar