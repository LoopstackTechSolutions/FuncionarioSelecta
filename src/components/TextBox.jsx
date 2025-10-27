function TextBox ({type, border, width, color = 'branco', placeholder = ''}) {

    color === 'branco' ?
    color = 'border-2 border-white rounded-[5px] focus:shadow-lg'
    :
    color = 'focus:border-[#0074D9] border-b-2 border-[#7C7C7C]'

    return (
        <>
        <input type={type} className={`p-[5px] outline-0 transition-all duration-300 ${color}`} 
        placeholder={placeholder}
        style={{width: width}}
        required/>
        </>
    )
}

export default TextBox