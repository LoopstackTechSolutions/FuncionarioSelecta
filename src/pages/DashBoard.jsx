import Header from "../components/Header"
import NavBar from "../components/NavBar"

function DashBoard() {
    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-30 mb-10 ml-[680px]">DashBoard</h1>

        <div className="flex flex-col m-auto w-[70%]">
            <section className="flex gap-8">
                <div className="bg-amber-300 h-72 w-72"></div>
                <div className="bg-amber-300 h-72 w-72"></div>
                <div className="bg-amber-300 h-72 w-72"></div>
            </section>

            <section className="flex gap-8">
                <div></div>
                <div></div>
            </section>
        </div>
        </>
    )
}

export default DashBoard