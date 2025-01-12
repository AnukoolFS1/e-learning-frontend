import { useDispatch } from "react-redux"
import { updateDisplayUser } from "../../../redux/studentSlice"
import { useNavigate } from "react-router-dom"

const User = ({user}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();


    function headToUser() {
        dispatch(updateDisplayUser(user));
        navigate(`/dashboard/user/${user._id}`)
    }
    return (
        <div className="user" onClick={headToUser}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

export default User