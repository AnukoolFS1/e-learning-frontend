import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import "../css/form.css"

const Signup = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "student"
    })
    const inputs = [
        { title: "Name", name: "name" },
        { title: "Email", name: "email" },
        { title: "Password", name: "password" },
        { title: "Phone", name: "phone" },
    ]
    const options = ["Student", "Instructor", "Admin"];

    const handleInput = (e) => {
        setFormState(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        for (const key in formState) {
            formData.append(key, formState[key])
        }

        try {
            const response = await fetch("https://e-learning-backend-11lu.onrender.com/signup", {
                method: "POST",
                body: formData
            })
            if (!response.ok) {
                const data = await response.json();
                alert(data.msg)
            } else {
                navigate('/')
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="form">
            <form action="" className="">
                <h1>Sign up</h1>
                {inputs.map((e, i) => {
                    return (<Input title={e.title} name={e.name} key={i} handleInput={handleInput} />)
                })}
                <select name="role" id="Role" onChange={handleInput}>
                    {options.map((e, i) => (<option value={e} key={i}>{e}</option>))}
                </select>
                <button onClick={onSubmit}>Submit</button>
                <Link to={"/signin"}>Already Signed up!</Link>
            </form>
        </div>
    )
}

export default Signup