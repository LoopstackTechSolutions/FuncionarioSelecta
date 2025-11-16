import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const cores = ['#0074D9', '#002d55', '#2e699c', '#4ca6f5', '#A0A0A0',]

export default function GraficoPizza({dados})
{
    return (
        <div className="w-full flex justify-center">
            <PieChart width={300} height={300}>
                <Pie
                    data={dados}
                    cx='50%'
                    cy='50%'
                    outerRadius={100}
                    dataKey= 'valor'
                    nameKey= 'nome'
                    label
                    >
                        {dados.map((entry, index) => {
                            return (
                                <Cell key={index} fill={cores[index % cores.length]} />
                            )
                        })}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}
