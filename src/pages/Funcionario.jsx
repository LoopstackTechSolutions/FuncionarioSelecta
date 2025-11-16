import Button from "../components/Button"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Table from "../components/Table"
import { useFuncionarios } from "../hook/useFuncionario"

function Funcionario() {

    const {funcionarios, loading, error, refetch, deleteFuncionario} = useFuncionarios();

    const handleDelete = async (id) => {
        const confirmado = window.confirm('Deseja excluir este funcionário?');

        if (!confirmado) return;

        const sucesso = await deleteFuncionario(id);

        if(sucesso)
            alert('Funcionário deletado com sucesso!');
    }

    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-20 mb-10 ml-[820px]">Funcionários</h1>

        
        <Table ml={'ml-80'} headerItens={['ID', 'Nome', 'Email', 'Senha', 'CPF', 'Nível de Acesso']}>
                
                {funcionarios.map((funcionario) => (
                    <tr key={funcionario.idFuncionario}>
                        <td>{funcionario.idFuncionario}</td>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.email}</td>
                        <td>{funcionario.senha == null ? ' ' : funcionario.senha}</td>
                        <td>{funcionario.cpf}</td>
                        <td>{funcionario.nivelAcesso}</td>
                        <td>
                            <div className="flex justify-center items-center gap-1.5 text-white mb-2.5 mt-2.5">
                                <button className="bg-[#0074D9] border-4 border-[#0074D9] rounded-[5px] hover:bg-[#0056a1] hover:border-[#0056a1] transition-all duration-300 cursor-pointer">Editar</button>
                                <span className="text-gray-400">|</span>
                                <button 
                                onClick={() => handleDelete(funcionario.idFuncionario)}
                                className="bg-red-700 border-4 border-red-700 rounded-[5px] hover:bg-red-800 hover:border-red-800 transition-all duration-300 cursor-pointer"
                                >
                                    Deletar
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

export default Funcionario