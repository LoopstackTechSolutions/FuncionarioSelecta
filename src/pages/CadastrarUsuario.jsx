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
                <label>Cargo</label>
                <select className="border-2 h-9 mb-5 text-white border-white rounded-[5px] w-full focus:shadow-lg p-[5px] outline-0 transition-all duration-300">
                    <option className="text-[#3d3d3d]" value="">(Selecione)</option>
                    <option className="text-[#3d3d3d]" value="gerente">Gerente</option>
                    <option className="text-[#3d3d3d]" value="escritorio">Escritório</option>
                    <option className="text-[#3d3d3d]" value="logistica">Logística</option>
                </select>

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