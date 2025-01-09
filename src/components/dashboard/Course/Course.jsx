import "../../css/batch.css"
import AddCard from "../AddCard";
import Courses from "./CourseCards";
const Course = () => {

    return (
        <div className="batch">
            <Courses />
            <AddCard tab={"Course"} />
        </div>
    )
}

export default Course;