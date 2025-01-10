import { useSelector } from "react-redux"
import "../../css/users.css"
const Students = () => {
    const students = useSelector(state => state.students.students);
    
    return (
        <div className="users">
            {
                students?.map(e => {
                    return (
                        <div className="user">
                            <h2>{e.name}</h2>
                            <p>{e.email}</p>
                            <p>{e.phone}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Students