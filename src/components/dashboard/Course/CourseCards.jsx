const Courses = ({course, name, duration, modules}) => {

    return (
        <div className="batchCard">
            <h2>{name}</h2>
            <h3>{modules} Modules</h3>
            <h4>{duration}</h4>
        </div>
    )
}

export default Courses;