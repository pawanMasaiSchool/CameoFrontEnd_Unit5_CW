

const CommonInput = ({width="280px", height="47px",placeholder, name, onChange, value, type}) => {
    return (
        <input style={{
            background:"#1E1B1E",
            width:width,
            borderRadius:"8px",
            height:height,
            borderWidth:"0px",
            border:"1px solid #413D40",
            color:"white",
            padding:"0px 15px",
            fontSize:"16px"
        }}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        />
    )
}

export default CommonInput