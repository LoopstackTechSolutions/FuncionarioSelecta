import { useFuncionarios } from "../hook/useFuncionario";

function Table({ml, children, headerItens = []}) {
    
    const header = headerItens.map((item, index) => (
        <th key={index}>{item}</th>
    ));
    


    return (
        <div className={`w-[80%] ${ml} text-[22px] border border-transparent rounded-[10px] overflow-hidden`}
            style={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.50)'}}>

            <table className={`w-full table-fixed cursor-default`}>
                <thead 
                    className="bg-[#0074D9] text-white">
                        
                        <tr>
                            {header}
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