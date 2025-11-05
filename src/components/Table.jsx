function Table() {
    return (
        <div className="w-[70%] m-auto text-[25px] border border-transparent rounded-[10px] overflow-hidden"
            style={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.50)'}}>
            <table className="w-full table-fixed">
            <thead 
                className="bg-[#0074D9] text-white">
                    
                    <tr>
                        <th>dfdgfg</th>
                        <th>dfgdfg</th>
                        <th>khjkhjk</th>
                        <th>Ação</th>
                    </tr>
                
            </thead>
            <tbody className="text-center bg-white">
                <tr className="">
                    <td>fhgfhfgh</td>
                    <td>vbnvbn</td>
                    <td>wererwer</td>

                    <td>
                        <div className="mt-2 mb-2 border-l border-gray-400">
                            <button className="border-black text-black border rounded-[5px] pl-2 pr-2 hover:bg-red-700 hover:border-red-700 hover:text-white transition-all duration-300 cursor-pointer">Remover</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        
    )
}

export default Table;