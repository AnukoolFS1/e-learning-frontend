import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
import '../css/dashboard.css';

const Dashboard = () => {
    
    useEffect(() => {
        async function fetchData (){
            const response = await fetch('http://localhost:4000/',{
                method: "GET",
                credentials: "include"
            })

            const data = await response.json();

            console.log(data)
        }
        fetchData()
    }, [])
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