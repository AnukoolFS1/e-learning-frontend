import Material from "./Material";
import "../../css/batch.css"
import AddCard from "../AddCard";
import { useSelector } from "react-redux";


const StudyMaterials = () => {
    const Materails = useSelector(state => state.materials.materials)


    return (
        <div className="batch">
            {
                Materails.length>0? <Material /> :
                Materails?.map(e => {
                    return (<Material material={e} name={e.name} path={e.path} course={e.course.name} key={e._id} />)
                })
            }
            <AddCard tab={"Material"} navigation={"/dashboard/new-material"} /> 
        </div>
    )
}

export default StudyMaterials;

