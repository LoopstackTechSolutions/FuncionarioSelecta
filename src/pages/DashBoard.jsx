import Header from "../components/Header"
import NavBar from "../components/NavBar"

function DashBoard() {
    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-30 mb-10 ml-[880px]">DashBoard</h1>

        <div id="dashboard" className="flex flex-col ml-[350px] w-[70%] text-white text-center">
            <section className="flex gap-13">
                <div className="bg-[#0074D9] h-[174px] w-[408px] border border-transparent rounded-[20px] pt-10">
                    <h4 className="text-[20px]">Funcionários Totais</h4>
                    <h2 className="text-[40px]">1.500</h2>
                </div>

                <div className="bg-[#0074D9] h-[174px] w-[408px] border border-transparent rounded-[20px] pt-10">
                    <h4 className="text-[20px]">Empresas Parceiras</h4>
                    <h2 className="text-[40px]">30</h2>
                </div>

                <div className="bg-[#0074D9] h-[174px] w-[408px] border border-transparent rounded-[20px] pt-10">
                    <h4 className="text-[20px]">Centros de Distribuições</h4>
                    <h2 className="text-[40px]">5</h2>
                </div>

            </section>

            <section id="graficos" className="flex gap-8 mt-32">
                <div className=" h-[493px] w-[918px] bg-white border border-transparent rounded-[20px] pt-6">
                    <h2 className="text-[#005FB3] text-3xl">Produtos mais vendidos</h2>
                </div>
                <div className="w-[408px] bg-white border border-transparent rounded-[20px] pt-6">
                    <h2 className="text-[#005FB3] text-3xl">Vendas por categoria de produto</h2>
                </div>
            </section>

            <div id="grafico" className="w-full bg-white h-[493px]  mt-16 border border-transparent rounded-[20px] pt-6">
                <h2 className="text-[#005FB3] text-3xl">Vendas Mensais</h2>
            </div>
        </div>

        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[753px] h-[753px] bottom-[-700px] right-0'></div>
        </div>
        </>
    )
}

export default DashBoard