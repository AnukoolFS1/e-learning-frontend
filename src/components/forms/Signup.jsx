import { useState } from "react"
import Input from "./Input"

const Signup = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role:""
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
            return {...prev, [e.target.name]: e.target.value}
        })
        console.log(formState)
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        for(const key in formState){
            formData.append(key, formState[key])
        }

        const response = await fetch("http://localhost:4000/signup", {
            method: "POST",
            body: formData
        })

        const data = await response.json();
        console.log(data)
    }
    return (
        <form action="">
            <h1>Sing up</h1>
            {inputs.map((e, i) => {
                return (<Input title={e.title} name={e.name} key={i} handleInput={handleInput} />)
            })}
            <select name="role" id="Role" onChange={handleInput}>
                {options.map((e, i) => (<option value={e} key={i}>{e}</option>))}
            </select>
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default Signup