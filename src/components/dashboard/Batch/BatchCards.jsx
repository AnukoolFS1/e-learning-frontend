const Batches = ({batch, name, course, instructor}) => {

    const open = (batch) => {

    }

    return (
        <div className="batchCard" onClick={() => open(batch)}>
            <h4>{name}</h4>
            <h2>{course}</h2>
            <h3>by {instructor}</h3>
        </div>
    )
}

export default Batches;