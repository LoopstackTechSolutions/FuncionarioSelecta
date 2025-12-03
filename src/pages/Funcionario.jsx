import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Table from "../components/Table"
import loadingGif from "../assets/img/loading.gif";
import { useFuncionarios } from "../hook/useFuncionario"

function Funcionario() {
    const navigate = useNavigate();

    const {funcionarios, loading, loadingInitial, error, refetch, deleteFuncionario} = useFuncionarios();

    const handleDelete = async (id) => {
        const confirmado = window.confirm('Deseja excluir este funcionário?');

        if (!confirmado) return;

        const sucesso = await deleteFuncionario(id);

        if(sucesso)
            alert('Funcionário deletado com sucesso!');
    }

    const editIcon = (
        <svg 
        className="h-0 group-hover:ml-2.5 group-hover:h-5 transition-all duration-300"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#ffffff"></path> 
            </g>
        </svg>
    )

    const deleteIcon = (
        <svg 
        className="h-0 group-hover:ml-2.5 group-hover:h-7 transition-all duration-300"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M10 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M14 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg>
    )

    const buttonClass = 'group flex justify-center items-center border-[6px] rounded-[5px] transition-all duration-300 cursor-pointer';

    if (loadingInitial)
    {
        return (
            <div className="text-center w-full m-auto flex flex-col justify-center items-center mt-[300px]">
                <img src={loadingGif} />
                <h1 className="text-[40px] text-[#005FB3]">Carregando...</h1>
    
                <div id='fundoGradient'>
                    <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
                    <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
                </div>
            </div>
        )
    }
            
    else
    {
        return (
            <>
            <Header />
            <NavBar />

            <h1 className="text-[40px] text-[#005FB3] mt-20 mb-10 ml-[890px]">Funcionários</h1>

            
            <Table ml={'ml-62'} headerItens={['ID', 'Nome', 'Email', 'Senha', 'CPF', 'Nível de Acesso', 'Ação']}>
                    
                    {funcionarios.map((funcionario) => (
                        <tr key={funcionario.idFuncionario} className="hover:bg-gray-100 transition-colors duration-300">
                            <td>{funcionario.idFuncionario}</td>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.email}</td>
                            <td>****</td>
                            <td>{funcionario.cpf}</td>
                            <td>{funcionario.nivelAcesso}</td>
                            <td>
                                <div className="flex justify-center items-center gap-1.5 text-white mb-2.5 mt-2.5">
                                    <button 
                                    onClick={() => navigate(`/funcionario/editar/${funcionario.idFuncionario}`)}
                                    className={`bg-[#0074D9] border-[#0074D9] hover:bg-[#0056a1] hover:border-[#0056a1] ${buttonClass}`}>
                                        Editar
                                        {editIcon}
                                    </button>
                                    <span className="text-gray-400">|</span>
                                    <button 
                                    onClick={() => handleDelete(funcionario.idFuncionario)}
                                    className={`bg-red-700 border-4 border-red-700 rounded-[5px] hover:bg-red-800 hover:border-red-800 transition-all ${buttonClass}`}
                                    >
                                        Deletar
                                        {deleteIcon}
                                    </button>
                                </div>
                            </td>

                        </tr>
                    ))}
            </Table>

            <div id='fundoGradient'>
                <div className='w-[938px] h-[875px] top-[-200px] left-[-300px]'></div>
                <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
            </div>
            </>
        )
    }

    
}

export default Funcionario