function TextBox ({type, width, height = '36px', mb = '0px', color = 'branco', placeholder = ''}) {

    color === 'branco' ?
    color = 'border-2 border-white rounded-[5px] focus:shadow-lg'
    :
    color = 'focus:border-[#0074D9] border-b-2 border-[#7C7C7C]'

    return (
        <>
        <input type={type} className={`p-[5px] h-9 outline-0 transition-all duration-300 ${color}`} 
        placeholder={placeholder}
        style={{width: width, height: height, marginBottom: mb}}
        required/>
        </>
    )
}

export default TextBox