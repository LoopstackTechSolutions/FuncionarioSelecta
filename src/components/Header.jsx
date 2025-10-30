import logo from '../assets/img/logo.png';
import perfil from '../assets/img/perfil.svg?react';
import Button from './Button';

function Header() {
    return (
        <>
        <header className="h-[68px] flex items-center justify-end pl-5 pr-5">

                <div className='flex items-center justify-end gap-15'>
                    <div className='flex items-center gap-1.5'>
                        <h2>Olá, Usuário</h2>
                        <img src={perfil} className='w-[42px] h-auto' />
                    </div>
                    
                    <Button texto='Sair' width="97px" submit="false" />
                </div>
            
        </header>
        </>
    )
}

export default Header