import Button from "../components/Button"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Table from "../components/Table"
import { useFuncionarios } from "../hook/useFuncionario"

function Funcionario() {

    const {funcionarios, loading, error, refetch} = useFuncionarios();

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