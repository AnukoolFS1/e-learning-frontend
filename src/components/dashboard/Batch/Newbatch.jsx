import { useNavigate } from "react-router-dom";
import Input from "../../forms/Input"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NewBatch = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)
    if (user?.role === "student") {
        navigate("/dashboard")
    }

    const courses = useSelector(state => state.courses.courses)
    const instructors = useSelector(state => state.instructors.instructors)
    const students = useSelector(state => state.students.students)
    const [formState, setFormState] = useState({
        name: "",
        course: "",
        instructor: "",
        students: [],
    });

    const checkBox = (e) => {
        if (e.target.checked) {
            setFormState(prev => {
                prev.students.push(e.target.name)
                return { ...prev }
            })
        } else {
            setFormState(prev => {

                prev.students = prev.students.filter(element => {

                    console.log(e.target.name, element)
                    return e.target.name !== element
                })
                return { ...prev }
            })
        }
    }


    const handleInput = (e) => {
        setFormState(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    async function onSubmit(e) {
        e.preventDefault()
        try {
            if (user.role === "instructor") setFormState(prev => ({ ...prev, instructor: user.id }));
            const response = await fetch("http://localhost:4000/batch", { //http://localhost:4000
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
                credentials: "include"
            });
            const data = await response.json();
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form action="" style={{ color: 'black' }}>
            <h2>Add a new batch</h2>
            <Input title={"Name"} name={"name"} type={"text"} handleInput={handleInput} />
            <div>
                <label htmlFor="Course">Course</label>
                <select name="course" id="Course" onChange={handleInput}>
                    <option>--select--</option>
                    {
                        courses?.map((e) => {
                            return (<option value={e._id} key={e._id} >{e.name}</option>)
                        })
                    }
                </select>
            </div>
            <div>
                <label htmlFor="Instructor">Instructor</label>
                <select name="instructor" id="Instructor" onChange={handleInput}>
                    {user?.role === "instructor" ?
                        <option value={user._id}>{user.name}</option> :
                        instructors?.map(e => {
                            return (<option key={e._id} value={e._id}>{e.name}</option>)
                        })
                    }
                </select>
            </div>
            <div style={{ display: "flex" }}>
                <label htmlFor="students">Add Students</label>
                <ul name="student" id="students">
                    {
                        students?.map(e => {

                            return (
                                <li key={e._id}>
                                    <input type="checkbox" id={e.email} name={e._id} onChange={checkBox} />
                                    <label htmlFor={e.email}>{e.name}</label>
                                </li>)
                        })
                    }
                </ul>
            </div>
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default NewBatch