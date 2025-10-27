function TextBox ({type, border, width, color = 'branco', placeholder = ''}) {

    return (
        <>
        <input type={type} className={`p-[5px] ${border == 'bottom' ? 'border-b-2' : 'border-2 rounded-[5px]'} 
        outline-0 focus:border-[#0074D9] ${color == 'cinza' ? 'border-[#7C7C7C]' : 'border-white'} border-[${color}] transition-all duration-300`} 
        placeholder={placeholder}
        style={{width: width}}
        required/>
        </>
    )
}

export default TextBox