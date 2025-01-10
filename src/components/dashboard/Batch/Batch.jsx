import Batches from "./BatchCards"
import "../../css/batch.css"
import AddCard from "../AddCard";
import { useSelector } from "react-redux";


const Batch = () => {
    const batches = useSelector(state => state.batches.batches)

    return (
        <div className="batch">
            {
                batches?.map(e => {
                    return (<Batches batch={e} name={e.name} intructor={e.instructor} course={e.course} />)
                })
            }
            <AddCard tab={"Batch"} /> 
        </div>
    )
}

export default Batch;