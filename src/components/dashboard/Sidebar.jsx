import { Link } from "react-router-dom";
import "../css/sidebar.css";


const Sidebar = () => {
    const aside = ["Batches", "Courses", "Study Materials","Students", "Logout"]

    return (
        <aside className="sidebar">
            <ul>
                {
                    aside.map(e => {
                        return (<li key={e}>
                            <Link>{e}</Link>
                        </li>)
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar