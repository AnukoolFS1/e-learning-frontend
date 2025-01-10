import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddCard = ({tab, navigation}) => {
    const user = useSelector(state => state.user.user)
    const statement = user.role !== "student";
    const navigate = useNavigate()

    return (
        <div className="batchCard" onClick={() => navigate(navigation)} style={{display:statement?"block":"none", width:"10vw"}}>
            Add New {tab}
        </div>
    )
}

export default AddCard;