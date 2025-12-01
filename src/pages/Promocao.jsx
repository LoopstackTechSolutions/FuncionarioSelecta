import Button from "../components/Button"
import Form from "../components/Form"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import TextBox from "../components/TextBox"

function Promocao() {
    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-10 mb-10 ml-[800px]">Criar Promoção</h1>
        <Form width="50%" margin="50px 520px">

        <label>Id produto</label>
        <TextBox width="100%" type="text" color="cinza" mb="50px" placeholder="Digite o Id do produto" />

        <label>Desconto</label>
        <TextBox width="100%" type="number" color="cinza" mb="50px" placeholder="Digite o desconto" />

        <label>Status</label>
        <TextBox width="100%" type="number" color="cinza" mb="50px" placeholder="Digite o status da promoção" />

        <label>Validade</label>
        <data value=""></data>
        <TextBox width="100%" type="datetime-local" color="cinza" mb="50px" placeholder="Escolha a data de validade" />

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