let PropsUsage=(props)=>{
    let {text,color,background,height,width}=props
    return(
    <button style={{
        color:color,
        backgroundColor:background,
        height:height,
        width:width
    }}>{text}</button>)
}

export default PropsUsage