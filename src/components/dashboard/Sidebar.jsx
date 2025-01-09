import { Link } from "react-router-dom";
import "../css/sidebar.css";


const Sidebar = () => {
    const aside = [
        { name: "Batches", route: "batches" },
        { name: "Courses", route: "courses" },
        { name: "Study Materials", route: "study-materials" },
        { name: "Students", route: "student" },
        { name: "Log Out", route: "/" },
    ]

    return (
        <aside className="sidebar">
            <ul>
                {
                    aside.map(e => {
                        return (<li key={e}>
                            <Link to={e.route}>{e.name}</Link>
                        </li>)
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar