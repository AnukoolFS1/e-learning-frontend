import { useSelector } from "react-redux"
import User from "../students/User";
import "../../css/users.css"
const Instructor = () => {
    const instructors = useSelector(state => state.users.instructors);
    
    return (
        <div className="users">
            {
                instructors?.map(e => {
                    return (
                        <User key={e.id} user={e} />
                    )
                })
            }
        </div>
    )
}

export default Instructor