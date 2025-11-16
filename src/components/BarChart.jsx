import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

export default function GraficoBarras({dados})
{
    return (
        <div className="w-full flex justify-center">
            <BarChart width={700} height={400} data={dados}>
                <CartesianGrid strokeDasharray='6 6' />
                <XAxis dataKey='nome' />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey='valor' />
            </BarChart>
        </div>
    );
}