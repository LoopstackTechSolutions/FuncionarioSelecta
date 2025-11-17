import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell} from "recharts";

export default function GraficoBarras({dados})
{
    const cor = '#0074D9';

    return (
        <div className="w-full flex justify-center">
            <BarChart width={850} height={400} data={dados}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='nome' />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar data = {dados} dataKey='valor' fill="#0074D9">
                </Bar>
            </BarChart>
        </div>
    );
}