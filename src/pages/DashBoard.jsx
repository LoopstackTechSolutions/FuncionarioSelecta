import Header from "../components/Header"
import NavBar from "../components/NavBar"
import GraficoPizza from "../components/PizzaChart"
import GraficoBarras from "../components/BarChart"
import GraficoLinha from "../components/LineChart"

function DashBoard() {

    const dadosPizza = [
        {nome: 'Técnologia', valor:70},
        {nome: 'Moda', valor:50},
        {nome: 'Esporte', valor:35},
        {nome: 'Eletrodomésticos', valor:25},
        {nome: 'Outro', valor:10}
    ]

    const dadosBarras = [
        {nome: 'Celular', valor:1500},
        {nome: 'Maquiagem', valor:2000},
        {nome: 'Sapato', valor: 1800},
        {nome: 'Eletrodomésticos', valor:1600},
        {nome: 'Camiseta', valor:1400},
        {nome: 'Utensíios de Cozinha', valor:2100},
        {nome: 'Outro', valor:5}
    ]

    const dadosLinhas = [
        { nome: "Jan", valor: 3500 },
        { nome: "Fev", valor: 4800 },
        { nome: "Mar", valor: 4000 },
        { nome: "Abr", valor: 4100 },
        { nome: "Mai", valor: 5009 },
        { nome: "Jun", valor: 3900 },
        { nome: "Jul", valor: 3800 },
        { nome: "Ago", valor: 5100 },
        { nome: "Set", valor: 4500 },
        { nome: "Out", valor: 5000 }
    ]

    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-30 mb-10 ml-[880px]">DashBoard</h1>

        <div id="dashboard" className="flex flex-col ml-[330px] w-[70%] text-white text-center">
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
                <div id="grafico" className=" h-[493px] w-[918px] relative z-[0] bg-white border border-transparent rounded-[20px] pt-6">
                    <h2 className="text-[#005FB3] text-3xl mb-1">Produtos mais vendidos</h2>
                    <GraficoBarras dados={dadosBarras} />
                </div>
                <div id="grafico" className="w-[408px] bg-white border border-transparent rounded-[20px] pt-6">
                    <h2 className="text-[#005FB3] text-3xl mb-6">Vendas por categoria de produto</h2>
                    <GraficoPizza dados={dadosPizza} />
                </div>
            </section>

            <div id="grafico" className="w-full bg-white h-[493px]  mt-16 border border-transparent rounded-[20px] pt-6">
                <h2 className="text-[#005FB3] text-3xl mb-10">Vendas Mensais</h2>
                <GraficoLinha dados={dadosLinhas} />
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