import { useState } from "react"
import Input from "../../forms/Input"

const NewMaterial = () => {
    const [file, setFile] = useState(null)
    const handleInput = (e) => {
        setFormState(e.target.file[0])
    }

    const onSubmit = async () => {
        const formdata = new FormData()
        formdata.append('file', file)

        const response = await fetch("", {
            method: "POST",
            body: formdata
        })
    }

    return (
        <form>
            <Input title={"Upload File"} name="file" handleInput={handleInput} type={"file"} />
            <button>Upload</button>
        </form>
    )
}

export default NewMaterial
