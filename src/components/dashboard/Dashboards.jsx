import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
import '../css//dashboard.css';

const Dashboard = () => {

    return (
        <section className="dashboard">
            <Sidebar />
            <div>
                <Outlet></Outlet>
            </div>
        </section>
    )
}

export default Dashboard