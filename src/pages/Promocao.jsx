import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import TextBox from "../components/TextBox"
import { usePromocao } from "../hook/usePromocao"

function Promocao() {
    const {promocoes, loading, error, cadastrarPromocao} = usePromocao();
    const [novaPromocao, setNovaPromocao] = useState(
        {IdProduto: '', Desconto: '', Status: '', Validade: ''}
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await cadastrarPromocao(novaPromocao);
            alert('Promoção criada com sucesso!');
            setNovaPromocao({IdProduto: '', Desconto: '', Status: '', Validade: ''});
        }

        catch (err)
        {
            alert('Erro: ' + err.message);
        }
    }

    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-10 mb-10 ml-[800px]">Criar Promoção</h1>
        <Form onsubmit={handleSubmit} width="50%" margin="50px 520px">

        <label>Id produto</label>
        <TextBox type="text" value={novaPromocao.IdProduto} 
        onChange={(e) => setNovaPromocao({...novaPromocao, IdProduto: e.target.value})}
        width="100%" classCss={'text-[40px]'} color="cinza" mb="50px" placeholder="Digite o Id do produto" />

        <label>Desconto</label>
        <TextBox type="number" value={novaPromocao.Desconto}
        onChange={(e) => setNovaPromocao({...novaPromocao, Desconto: e.target.value})}
        width="100%" color="cinza" mb="50px" placeholder="Digite o desconto" />

        <label>Status</label>
        <TextBox type="text" value={novaPromocao.Status}
        onChange={(e) => setNovaPromocao({...novaPromocao, Status: e.target.value})}
        width="100%" color="cinza" mb="50px" placeholder="Digite o status da promoção" />

        <label>Validade</label>
        <data value=""></data>
        <TextBox type="datetime-local" value={novaPromocao.Validade}
        onChange={(e) => setNovaPromocao({...novaPromocao, Validade: e.target.value})}
        width="100%" color="cinza" mb="50px" placeholder="Escolha a data de validade" />

        <div className="text-center">
            <Button width="50%" height="53px" modo="azul" />
        </div>

        </Form>

        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] bottom-0 left-[-300px]'></div>
            <div className='w-[753px] h-[753px] top-[-100px] right-0'></div>
        </div>
        </>
    )
}

export default Promocao