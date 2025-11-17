import { useFuncionarios } from "../hook/useFuncionario";

function Table({ml, children, headerItens = []}) {
    
    const header = headerItens.map((item, index) => (
        <th key={index}>{item}</th>
    ));
    


    return (
        <div className={`w-[70%] ${ml} text-[25px] border border-transparent rounded-[10px] overflow-hidden`}
            style={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.50)'}}>

        <table className={`w-full table-auto`}>
            <thead 
                className="bg-[#0074D9] text-white">
                    
                    <tr>
                        {header}
                        <th>Ação</th>
                    </tr>
                
            </thead>
            <tbody className="text-center bg-white">
                
                {children}            

            </tbody>
        </table>
        </div>
        
    )
}

export default Table;