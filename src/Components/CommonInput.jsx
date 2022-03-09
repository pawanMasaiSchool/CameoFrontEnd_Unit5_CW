

const CommonInput = ({placeholder, name, onChange, value, type}) => {
    return (
        <input style={{
            background:"#1E1B1E",
            width:"280px",
            borderRadius:"8px",
            height:"47px",
            borderWidth:"0px",
            border:"1px solid #413D40",
            color:"white",
            padding:"0px 15px",
            fontSize:"16px"
        }}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        />
    )
}

export default CommonInput