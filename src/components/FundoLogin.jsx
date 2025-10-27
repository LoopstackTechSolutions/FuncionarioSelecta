import imagem from '../assets/img/fundo.png';

function FundoLogin ({children}) {
    return (
        <div
        className='bg-cover bg-center bg-no-repeat min-h-screen'
        style={{backgroundImage: `url(${imagem})`}}
        >
            {children}
        </div>
    )
}

export default FundoLogin;