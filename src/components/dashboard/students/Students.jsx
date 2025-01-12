import { useSelector } from "react-redux";
import User from "./User";
import "../../css/users.css"
const Students = () => {
    const students = useSelector(state => state.users.students);
    
    return (
        <div className="users">
            {
                students?.map(e => {
                    return (
                        <User key={e._id} user={e} />
                    )
                })
            }
        </div>
    )
}

export default Students