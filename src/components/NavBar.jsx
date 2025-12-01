import React from 'react';

import homeIcon from '../assets/img/home.svg?react';
import dashIcon from '../assets/img/grafico.svg?react';
import produtoIcon from '../assets/img/produto.svg?react';
import funcionarioIcon from '../assets/img/funcionario.svg?react';
import pedidoIcon from '../assets/img/pedido.svg?react';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function NavBar () {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    }

    const handleDashBoardClick = () => {
        navigate('/dashboard');
    }

    const handleFuncionarioClick = () => {
        navigate('/funcionario/cadastrar');
    }

    const handleFunciCadastrarClick = () => {
        navigate('/funcionario/cadastrar');
    }

    const handleProdBuscarClick = () => {
        navigate('/produto/buscar');
    }

    const handlePromocaoClick = () => {
        navigate('/promocao');
    }

    const handleClientesClick = () => {
        navigate('/clientes');
    }

    return (
        
        <div id='navbar' className='mr-28 text-[20px] h-full fixed z-10 top-0 border-b-20 border-t-20 border-l-20 border-r-2 bg-white border-white border-r-[#D3D3D3] pt-9 w-[110px] overflow-hidden hover:w-[350px]'>
            <ul  className='flex flex-col gap-15 cursor-pointer'>
                <img src={logo} className='w-[200px] imgLogoNavbar pl-1 mb-5' />

                <li onClick={handleHomeClick}> <img src={homeIcon} /> Página Inicial</li>

                <li onClick={handleDashBoardClick}> <img src={dashIcon}  /> DashBoard</li>

                <li onClick={handleFuncionarioClick}> <img src={funcionarioIcon}  /> Funcionários </li>

                <li onClick={handleFunciCadastrarClick}> <img src={pedidoIcon}  /> Cadastrar Funcionário </li>

                <li onClick={handleProdBuscarClick}> <img src={produtoIcon} /> Buscar Produto</li>

                <li onClick={handlePromocaoClick}> <img src="" alt="" /> Criar promoção</li>
                <li onClick={handleClientesClick}> <img src="" alt="" /> Listar Clientes</li>
            </ul>
        </div>
    )
}

export default NavBar