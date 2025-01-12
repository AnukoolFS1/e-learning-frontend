import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addInstructor, addStudents } from "../../../redux/studentSlice";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useSelector(state => state.users.currentDisplayUser);
    const instructors = useSelector(state => state.users.instructors)
    const students = useSelector(state => state.users.students)
    const batches = useSelector(state => state.batches.batches);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showBatch = [];

    if (user.role === "student") {
        batches.forEach(batch => {
            batch.enrolledStudents.forEach(element => {
                if (element._id === user._id) {
                    showBatch.push(batch)
                }
            })
        });
    } else {
        batches.forEach(element => {
            console.log(element.instructor)
            if (element.instructor._id === user._id) {
                showBatch.push(element)
            }
        })
    }

    const deleteUser = () => {
        let isComfirm = confirm("Do you want to delete the user?")
        if(isComfirm){
            let newUserCollections
            if(user.role === "instructor"){    
                newUserCollections = instructors.filter(e => e._id !== user._id)
            }else {
                newUserCollections = students.filter(e => e._id !== user._id)
            }
            fetch(`https://e-learning-backend-11lu.onrender.com/user/${user._id}`, {
                method: "DELETE",
                credentials: "include"
            }).then(result => {
                if(result.ok){
                    if(user.role === "instructors"){
                        dispatch(addInstructor(newUserCollections));
                    }else{
                        dispatch(addStudents(newUserCollections))
                    }
                    navigate('/dashboard')
                }
                return result.json()
            }).then(result => console.log(result))
            .catch(err => console.log(err))
        }
    }

    return (
        <div className="userdetails">
            <h1>{user.name}</h1>
            <h2>{user.role}</h2>
            <cite>{user.email}, {user.phone}</cite>
            <ul>
                <h4>User Batches</h4>
                <ol>
                    {showBatch.length>0? showBatch?.map(e => {
                        return (<li>
                            {e.name}
                        </li>)
                    }): <li>...no allocated to any batch</li>}
                </ol>
            </ul>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default UserDetails