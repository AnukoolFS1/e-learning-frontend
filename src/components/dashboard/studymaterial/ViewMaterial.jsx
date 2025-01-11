import { useSelector } from "react-redux"

const ViewMaterial = () => {
    const Material = useSelector(state => state.materials.materialsDetails)


    return (
        <div>
            <iframe className="fullpreview" src={Material.path} frameborder="0" style={{width:"100%"}}></iframe>
        </div>
    )
}

export default ViewMaterial