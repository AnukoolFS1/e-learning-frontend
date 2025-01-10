import Batches from "./BatchCards"
import "../../css/batch.css"
import AddCard from "../AddCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Batch = () => {
    const batches = useSelector(state => state.batches.batches)


    return (
        <div className="batch">
            {
                batches?.map(e => {
                    console.log(e.instructor)
                    return (<Batches batch={e} name={e.name} instructor={e.instructor.name} course={e.course.name} key={e._id} />)
                })
            }
            <AddCard tab={"Batch"} navigation={"/dashboard/new-batch"} /> 
        </div>
    )
}

export default Batch;