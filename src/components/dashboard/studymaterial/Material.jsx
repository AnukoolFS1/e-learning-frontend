import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMaterailDetails } from "../../../redux/materialsSlice";

const Material = ({material, name, course, instructor}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const open = (material) => {
        dispatch(updateMaterailDetails(material))
        navigate(`/dashboard/material/${material._id}`)
    }

    return (
        <div className="batchCard" onClick={() => open(material)}>
            <h4>{name}</h4>
            <h2>{course}</h2>
            <h3>by {instructor}</h3>
        </div>
    )
}

export default Material;