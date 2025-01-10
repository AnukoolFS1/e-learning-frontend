import { useNavigate } from "react-router-dom";
import Input from "../../forms/Input"
import { useSelector } from "react-redux";
import { useState } from "react";

const NewBatch = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)
    if (user?.role === "student") {
        navigate("/dashboard")
    }
    const instructors = useSelector(state => state.instructors.instructors)
    const students = useSelector(state => state.students.students)
    const [formState, setFormState] = useState({
        name: "",
        instructors: user.role === "instructor" ? user.id : "",
        students: [],
    });

    const checkbox = (e) => {
        if(e.target.checked){
            setFormState(prev => {
                prev.students
                return {...prev, }
            })
        }
    }


    return (
        <form action="" style={{ color: 'black' }}>
            <h2>Add a new batch</h2>
            <Input title={"Name"} name={"name"} type={"text"} />
            <div>
                <label htmlFor="Instructor">Instructor</label>
                <select name="instructor" id="Instructor">
                    {user?.role === "instructor" ?
                        <option value={user.id} >{user.name}</option> :
                        instructors?.map(e => {
                            return (<option key={e.id} value={e.id}>{e.name}</option>)
                        })
                    }
                </select>
            </div>
            <div style={{ display: "flex"}}>
                <label htmlFor="students">Add Students</label>
                <ul name="student" id="students">
                    {
                        students?.map(e => {
                            return (<li key={e.id}>
                                <input type="checkbox" id={e.email} name={e.id} value={e.id} onChange={checkBox} />
                                <label htmlFor={e.email}>{e.name}</label>
                            </li>)
                        })
                    }
                </ul>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default NewBatch