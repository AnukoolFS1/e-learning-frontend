import { useState } from "react";
import Input from "./Input";

const Signin = () => {
    const inputs = [
        { title: "Email", name: "email" },
        { title: "Password", name: "password" },
    ]

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        setFormState(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
        console.log(formState)
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:4000/signin", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formState)
            })
            
            const data = await response.json();
            console.log(data)
        }catch(err){
        }
    }

    return (<form action="">
        <h1>Sing in</h1>
        {inputs.map((e, i) => {
            return (<Input title={e.title} name={e.name} key={i} handleInput={handleInput} />)
        })}
        <button onClick={onSubmit}>Submit</button>
    </form>
    )
}

export default Signin