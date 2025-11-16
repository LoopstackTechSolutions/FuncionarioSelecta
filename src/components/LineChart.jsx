import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function GraficoLinha({dados})
{
    return (
        <div className="w-full flex justify-center">
            <LineChart width={1100} height={370} data={dados}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='nome' />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                    type='monotone'
                    dataKey='valor'
                />
            </LineChart>
        </div>
    )
}