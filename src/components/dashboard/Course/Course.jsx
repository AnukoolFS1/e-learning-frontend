import { useSelector } from "react-redux";
import "../../css/batch.css"
import AddCard from "../AddCard";
import Courses from "./CourseCards";
const Course = () => {
    const courses = useSelector(state => state.courses.courses);


    return (
        <div className="batch">
            {
                courses?.map(e => {
                    return (<Courses key={e._id} course={e} name={e.name} duration={e.duration} modules={e.modules.length} />)
                })
            }
            <AddCard tab={"Course"} />
        </div>
    )
}

export default Course;