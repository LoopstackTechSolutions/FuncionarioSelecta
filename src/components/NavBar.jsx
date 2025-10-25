import React from 'react';

import homeIcon from '../assets/img/home.svg?react';
import dashIcon from '../assets/img/grafico.svg?react';
import produtoIcon from '../assets/img/produto.svg?react';
import entregaIcon from '../assets/img/entrega.svg?react';
import ticketIcon from '../assets/img/ticket.svg?react';
import entregadorIcon from '../assets/img/entregador.svg?react';
import funcionarioIcon from '../assets/img/funcionario.svg?react';
import cdIcon from '../assets/img/cd.svg?react';
import empresaIcon from '../assets/img/empresa.svg?react';

function NavBar () {
    return (
        
        <div id='navbar' className='text-[20px] h-[100%] fixed top-0 border-b-[20px] border-t-[20px] border-l-[20px] border-r-[2px] bg-white border-white border-r-[#D3D3D3] pt-9 max-w-[90px] overflow-hidden'>
            <ul  className='grid grid-cols-1 gap-13 cursor-pointer'>
                <li> <img src={homeIcon} /> Página Inicial</li>
                <li> <img src={dashIcon}  /> DashBoard</li>
                <li> <img src={produtoIcon} /> Produto</li>
                <li> <img src={entregaIcon} /> Detalhes Entrega</li>
                <li> <img src={ticketIcon} /> Tickets</li>
                <li> <img src={entregadorIcon} /> Aceitar Entregador</li>
                <li> <img src={funcionarioIcon} /> Cadastrar Funcionário</li>
                <li>Fazer Pedido Interno</li>
                <li> <img src={cdIcon} /> Detalhes Centro de Distribuição</li>
                <li> <img src={empresaIcon} /> Aceitar Empresa Parceira</li>
            </ul>
        </div>
    )
}

export default NavBar