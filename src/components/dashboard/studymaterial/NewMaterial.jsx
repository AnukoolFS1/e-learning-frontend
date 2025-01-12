import { useState } from "react"
import Input from "../../forms/Input"
import { useSelector } from "react-redux"

const NewMaterial = () => {
    const batches = useSelector(state => state.batches.batches)
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [batch, setBatch] = useState('')
    const handlefile = (e) => {
        setFile(e.target.files[0])
    }

    const handleInput = (e) => {
        setName(e.target.value)
    }
    const handleBatch = (e) => {
        setBatch(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('file', file);
        formdata.append('name', name);
        formdata.append('batch', batch);

        const response = await fetch("http://localhost:4000/addfile", {
            method: "POST",
            body: formdata
        })

        const data = await response.json();
        console.log(data)
    }

    return (
        <form>
            <Input title={"Name"} name="file" handleInput={handleInput} type={"text"} />
            <div>
                <label htmlFor="Batch">Batch</label>
                <select name="batch" id="Batch" onChange={handleBatch}>
                <option>--select--</option>
                    {
                        batches?.map(e => {
                            return (<option key={e._id} value={e._id}>{e.name}</option>)
                        })
                    }
                </select>
            </div>
            <Input title={"Upload File"} name="file" handleInput={handlefile} type={"file"} />
            <button onClick={onSubmit}>Upload</button>
        </form>
    )
}

export default NewMaterial
