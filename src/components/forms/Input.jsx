const Input = ({title, name, handleInput}) => {
    return (
        <div>
            <label htmlFor={title}>{title}</label>
            <input type="text" id={title} name={name} placeholder={title} onChange={handleInput} />
        </div>
    )
}

export default Input