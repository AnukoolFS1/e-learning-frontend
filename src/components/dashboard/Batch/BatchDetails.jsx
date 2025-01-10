import { useState } from "react";
import { useSelector } from "react-redux";
import '../../css/batchDetails.css';

function StudentList ({batchID,display, batchStudents, functioning, path}) {
    const [formState, setFormState] = useState({
        batchId: batchID,
        students:[]
    })
    let students
    if(batchStudents){
        students = batchStudents;
    }else{
        students = useSelector((state) => state.students.students)
    }
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

    async function onSubmit(e) {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:4000/batch/${path}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
                credentials: "include"
            });
            const data = await response.json();
            alert(data.msg)
        }catch(err){
            console.log(data);
        }
    }
    return (
        <div style={{ display }}>
            <label htmlFor="students">{functioning}</label>
            <ul name="student" id="students">
                {
                    students?.map(e => {
                        console.log(e)
                        return (
                            <li key={e._id}>
                                <input type="checkbox" id={e.email} name={e._id} onChange={checkBox} />
                                <label htmlFor={e.email}>{e.name}</label>
                            </li>)
                    })
                }
            </ul>
            <button style={{display:formState.students.length>0?"block":"none"}} onClick={onSubmit}>{functioning === "Add Students"? "Add": "Remove"}</button>
        </div>
    )
}

const BatchDetails = () => {
    const batchDetails = useSelector((state) => state.batches.batchDetails);
    if (!batchDetails) {
        return <p>Loading...</p>;
    }
    const [studentList, setStudentList] = useState(false)
    const [rmstudentList, setrmStudentList] = useState(false)

    

    return (
        <section className="batch-details">
            <h1 className="batch-title">{batchDetails.name}</h1>

            <h2 className="section-title">Instructor Details:</h2>
            <ul className="details-list">
                <li><strong>Name:</strong> {batchDetails.instructor?.name}</li>
                <li><strong>Email:</strong> {batchDetails.instructor?.email}</li>
                <li><strong>Phone:</strong> {batchDetails.instructor?.phone}</li>
            </ul>

            <h2 className="section-title">Course Details:</h2>
            <p><strong>Course Name:</strong> {batchDetails.course?.name}</p>

            <h2 className="section-title">Enrolled Students:</h2>
            {batchDetails.enrolledStudents?.length > 0 ? (
                <ul className="details-list">
                    {batchDetails.enrolledStudents.map((student, index) => (
                        <li key={index}>{student.name}</li>
                    ))}
                    {studentList && <StudentList path={"addstudents"} functioning={"Add Students"} display={studentList?"flex": "none"} batchID={batchDetails._id} />}
                    <button onClick={() => {setStudentList(!studentList); setrmStudentList(false)}}>Add students</button>
                    {rmstudentList && <StudentList path={"removestudents"} functioning={"Remove Students"} display={rmstudentList?"flex": "none"} batchID={batchDetails._id} batchStudents={batchDetails.enrolledStudents} />}
                    <button onClick={() => {setrmStudentList(!rmstudentList); setStudentList(false)}}>Remove Student</button>
                </ul>
            ) : (
                <>
                    <p>No students enrolled yet.</p>
                    <StudentList display={studentList?"flex": "none"} batchID={batchDetails._id} />
                    <button onClick={() => setStudentList(!studentList)}>Add students</button>
                </>
            )}

            <h2 className="section-title">Study Materials:</h2>
            {batchDetails.studyMaterials?.length > 0 ? (
                <ul className="details-list">
                    {batchDetails.studyMaterials.map((material, index) => (
                        <li key={index}>{material.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No study materials available.</p>
            )}

            <p className="timestamp">
                <strong>Created At:</strong> {new Date(batchDetails.createdAt).toLocaleString()}
            </p>
            <p className="timestamp">
                <strong>Updated At:</strong> {new Date(batchDetails.updatedAt).toLocaleString()}
            </p>
        </section>
    );
};

export default BatchDetails;