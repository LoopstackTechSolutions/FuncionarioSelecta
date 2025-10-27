function Button ({texto="Cadastrar", modo, width, height = "auto"}) {
    return (
        <>
        <input type="submit" value={texto} className={`text-3xl cursor-pointer border-[1px] border-transparent rounded-[5px] ${modo == 'azul' ? 
            'bg-[#0074D9] text-white hover:bg-[#005aa8] hover:transform hover:scale-[1.1] transition-all duration-300' 
            : 
            'bg-[#ffffff] text-[#0074D9] hover:transform hover:scale-[1.1] transition-all duration-300'}`} 
            style={{width: width, height: height}}
            onClick={() => {console.log('teste')}}
        />
        </>
    )
}

export default Button