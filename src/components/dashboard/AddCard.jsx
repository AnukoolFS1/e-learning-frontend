import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddCard = ({tab, navigation}) => {
    const user = useSelector(state => state.user.user)
    const statement = user.role !== "student";
    const navigate = useNavigate()

    return (
        <div className="batchCard AddCard" onClick={() => navigate(navigation)}>
            Add New {tab}
        </div>
    )
}

export default AddCard;