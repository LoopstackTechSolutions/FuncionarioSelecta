import saida from '../assets/img/sair.svg?react';
import { useNavigate } from 'react-router-dom';

function Button ({texto="Cadastrar", submit = true, modo, width, height = "auto"}) {
    
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    if (submit === true) {

        modo === 'azul' ? 
        modo = 'bg-[#0074D9] text-white hover:bg-[#005aa8] hover:transform hover:scale-[1.1] transition-all duration-300' 
        :
        modo = 'bg-[#ffffff] text-[#0074D9] hover:transform hover:scale-[1.1] transition-all duration-300'

        return (
            <input type="submit" value={texto} className={`text-3xl cursor-pointer border border-transparent rounded-[5px] ${modo}`} 
            style={{width: width, height: height}}
        />
        )
    }

    else {
        modo === 'branco' ?
        modo = 'border-white text-white'
        :
        modo = 'border-black text-black'

        return (
            <button onClick={handleLoginClick} id="saida" className={`text-[16px] p-1 cursor-pointer border rounded-[5px] ${modo} hover:bg-[#D90000] hover:text-white transition-all duration-300 flex items-center justify-center`} 
            style={{width: width, height: height}}>
                {texto}
                <img src={saida} />
            </button>
        )
    }
}

export default Button