const Input = ({ title, name, handleInput, type }) => {
    return (
        <div style={{ color: "black" }}>
            
            <label htmlFor={title}>{title}</label>
            <input type={type} id={title} name={name} placeholder={title} onChange={handleInput} />
        </div>
    )
}

export default Input