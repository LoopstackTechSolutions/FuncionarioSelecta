function Form({width, margin, children}) {
    return (
        <form 
        className="w-[50%] grid border-30 border-white rounded-[10px] p-6 bg-white" 
        style={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.50)', margin: margin, width: width}}>
            {children}
        </form>
    )
}

export default Form