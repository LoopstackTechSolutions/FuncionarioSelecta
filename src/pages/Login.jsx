import Button from "../components/Button";
import logo from "../assets/img/logo.png";
import TextBox from "../components/TextBox";
import FundoLogin from "../components/FundoLogin";

function Login() {
    return (
        <>
        <FundoLogin>

            <form className="w-[40%] m-auto">
            <img src={logo} className="w-[300px] h-auto m-auto pt-[200px] mb-20" alt="logo" />
    
            <div className="mb-5 text-white">
                <label>E-mail</label>
                <TextBox type="email" width="100%" />
            </div>
            
            <div className="mb-5 text-white">
                <label>Senha</label>
                <TextBox type="password" width="100%" />
            </div>
            

            <div className="text-center mb-2.5">
                <Button modo="branco" texto="Entrar" width="100%" height="53px" />
            </div>

            <h2 className="flex justify-end text-[18px] gap-2 text-white cursor-default">Não tem uma conta? <a className="hover:underline hover:cursor-pointer" href="http://localhost:5173/cadastrarUsuario">Cadastre-se</a></h2>
            
        </form>

        </FundoLogin>
        </>
    )
}

export default Login;
