import FundoLogin from "../components/FundoLogin"
import TextBox from "../components/TextBox"
import Button from "../components/Button"
import Logo from "../assets/img/logo.png"

function CadastrarUsuario() {
    return (
        <>
        <FundoLogin>
            
            <form className="w-[40%] m-auto text-white">
                <img src={Logo} className="w-[300px] h-auto m-auto pt-28 mb-10" />
                <h1 className="text-center text-[40px] text-white pb-3.5">Cadastre-se</h1>
                

                <label>Nome</label>
                <TextBox type="text" width="100%" mb="20px" />
                <label>Email</label>
                <TextBox width="100%" type="email" mb="20px" />
                <label>Senha</label>
                <TextBox type="text" width="100%" mb="20px" />
                <label>CPF</label>
                <TextBox type="text" width="100%" mb="20px" />

                <div className="text-center mb-2.5 flex items-center">
                <a href="http://localhost:5173/login" className="text-[26px] w-[50%] hover:underline">Cancelar</a>
                <Button modo="branco" width="100%" height="53px" />
            </div>
            </form>
        </FundoLogin>
        </>
    )
}

export default CadastrarUsuario