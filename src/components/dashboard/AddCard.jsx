import { useSelector } from "react-redux";

const AddCard = ({tab}) => {
    const user = useSelector(state => state.user.user)
    const statement = user.role !== "student"

    return (
        <div className="batchCard"  style={{display:statement?"block":"none", width:"10vw"}}>
            Add New {tab}
        </div>
    )
}

export default AddCard;