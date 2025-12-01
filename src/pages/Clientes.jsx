import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import { useClientes } from "../hook/useCliente";

export default function Clientes() {
    const navigate = useNavigate();

    const {clientes, loading, error, refetch} = useClientes();
    return (

        <>
            <Header />
            <NavBar />

            <Table headerItens={['ID', 'Nome', 'Email', 'Senha', 'Saldo']}>
                {clientes.map((cliente) => (
                    <tr key={cliente.idCliente}>
                        <td>{cliente.idCliente}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>****</td>
                        <td>{cliente.saldo}</td>

                    </tr>
                ))}
            </Table>
        </>
    )
}