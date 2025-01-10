import { useSelector } from "react-redux"

const Students = () => {
    const students = useSelector(state => state.students.students)
    return (
        <div>
            {
                students?.map(e => {
                    return (
                        <div>
                            <h2>{e.name}</h2>
                            <p>{e.email}</p>
                            <p>{e.phone}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Students