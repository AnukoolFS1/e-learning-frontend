import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";

const Signin = () => {
    const inputs = [
        { title: "Email", name: "email", type: "text" },
        { title: "Password", name: "password", type: "password" },
    ]

    const navigate = useNavigate()

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        setFormState(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formState),
                credentials: "include"
            })

            if (response.ok) {
                navigate('/dashboard')
            }
        } catch (err) {
        }

    }

    return (
        <div className="form">
            <form action="">
                <h1>Sign in</h1>
                {inputs.map((e, i) => {
                    return (<Input title={e.title} type={e.type} name={e.name} key={i} handleInput={handleInput} />)
                })}
                <button onClick={onSubmit}>Submit</button>
                <Link to={"/signup"}>New User!</Link>
            </form>
        </div>
    )
}

export default Signin