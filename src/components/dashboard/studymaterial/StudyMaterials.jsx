import Material from "./Material";
import "../../css/batch.css";
import "../../css/Materials.css"
import AddCard from "../AddCard";
import { useSelector } from "react-redux";


const StudyMaterials = () => {
    const Materials = useSelector(state => state.materials.materials)

    return (
        <div className="batch">
            {
                Materials.length===0? <Material /> :
                Materials?.map(e => {
                    return (<Material material={e} id={e._id} name={e.name} path={e.path} key={e._id} />)
                })
            }
            <AddCard tab={"Material"} navigation={"/dashboard/new-material"} /> 
        </div>
    )
}

export default StudyMaterials;

