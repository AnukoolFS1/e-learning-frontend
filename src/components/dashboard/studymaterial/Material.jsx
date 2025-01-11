import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMaterailDetails } from "../../../redux/materialsSlice";

const Material = ({ material, name, path, publicid, id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const open = (material) => {
        dispatch(updateMaterailDetails(material))
        navigate(`/dashboard/study-materials/${material._id}`)
    }


    return (
        <div className="batchCard" onClick={() => open(material)}>
            <h4>{name}</h4>
            <h2>{publicid}</h2>
            <iframe className="iframe" src={path}
                style={{
                    pointerEvents: 'none',
                }}
                frameborder="0"></iframe>
        </div>
    )
}

export default Material;