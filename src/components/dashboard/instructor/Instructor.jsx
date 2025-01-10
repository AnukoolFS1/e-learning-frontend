import { useSelector } from "react-redux"
import "../../css/users.css"
const Instructor = () => {
    const instructors = useSelector(state => state.instructors.instructors);
    
    return (
        <div className="users">
            {
                instructors?.map(e => {
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

export default Instructor