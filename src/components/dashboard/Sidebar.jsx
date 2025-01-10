import { Link } from "react-router-dom";
import "../css/sidebar.css";
import { useSelector } from "react-redux";


const Sidebar = () => {
    const aside = {
        "admin": [
            { name: "Batches", route: "batches" },
            { name: "Courses", route: "courses" },
            { name: "Study Materials", route: "study-materials" },
            { name: "Students", route: "student" },
            { name: "Instructors", route: "instructors" },
            { name: "Log Out", route: "/" }],
        "instructor": [
            { name: "Batches", route: "batches" },
            { name: "Courses", route: "courses" },
            { name: "Study Materials", route: "study-materials" },
            { name: "Students", route: "student" },
            { name: "Log Out", route: "/" }],
        "student": [
            { name: "Batches", route: "batches" },
            { name: "Courses", route: "courses" },
            { name: "Study Materials", route: "study-materials" },
            { name: "Log Out", route: "/" }
        ]
    }
    const user = useSelector(state => state.user.user)
    return (
        <aside className="sidebar">
            <ul>
                {
                    aside[user.role]?.map(e => {
                        return (<li key={e.name}>
                            <Link to={e.route}>{e.name}</Link>
                        </li>)
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar