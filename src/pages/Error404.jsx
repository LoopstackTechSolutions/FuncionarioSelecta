import errorImg from '../assets/img/error404.png';
import logo from '../assets/img/logo.png';

export default function Error404() {

    const link = localStorage.getItem('token') ? ['/home', 'Voltar para a Página Inicial'] : ['/login', 'Voltar para a tela de login'];
    
    return (

        <>
        <header className='bg-[#0074D9] h-20 pt-2.5 pl-2.5'>
            <img src={logo} className='w-[200px]' />
        </header>

        <div className='flex w-[80%] m-auto items-center justify-center mt-[200px]'>
            <div className='w-[304px]'><img src={errorImg} /></div>
            <div className='text-center ml-7'>
                <h1 className='text-4xl font-bold'>Not Found</h1>
                <h2 className='text-3xl'>Oops, página não encontrada!</h2>
                <a href={link[0]} className='text-2xl hover:text-[#0074D9] transition-all duration-300 hover:underline'>{link[1]}</a>
            </div>
        </div>
            
        <div id='fundoGradient'> 
            <div className='w-[938px] h-[875px] top-[-200px] left-[-300px]'></div>
            <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
        </div>
        </>
    )
}