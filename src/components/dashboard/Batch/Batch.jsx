import Batches from "./BatchCards"
import "../../css/batch.css"
import AddCard from "../AddCard";
const Batch = () => {

    return (
        <div className="batch">
            <Batches />
            <AddCard tab={"Batch"} />
        </div>
    )
}

export default Batch;