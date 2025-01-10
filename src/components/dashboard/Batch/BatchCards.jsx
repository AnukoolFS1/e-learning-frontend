import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBatchDetails } from "../../../redux/batchesSlice";

const Batches = ({batch, name, course, instructor}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const open = (batch) => {
        dispatch(updateBatchDetails(batch))
        navigate(`/dashboard/batches/${batch._id}`)
    }

    return (
        <div className="batchCard" onClick={() => open(batch)}>
            <h4>{name}</h4>
            <h2>{course}</h2>
            <h3>by {instructor}</h3>
        </div>
    )
}

export default Batches;