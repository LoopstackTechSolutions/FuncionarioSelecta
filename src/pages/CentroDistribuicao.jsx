import Button from "../components/Button"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Table from "../components/Table"

function CentroDistribuicao() {
    return (
        <>
            <Header />
            <NavBar />

            <h1 className="text-[40px] text-[#005FB3] mt-20 mb-10 ml-[700px]">Detalhes Centros de Distribuições</h1>
            
            <Table />

            <div id='fundoGradient'>
                <div className='w-[938px] h-[875px] top-[-200px] left-[-300px]'></div>
                <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
            </div>
        </>
    )
}

export default CentroDistribuicao