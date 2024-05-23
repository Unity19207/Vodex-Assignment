import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const percentage = 73
const filledValue = (percentage / 100) * 360
const remainedValue = 360 - filledValue

const data = [
    { name: 'Remained', value: remainedValue },
    { name: 'Achieved Sales', value: filledValue }
]

const colors = ['#4B5563', '#4338CA']

export default function BuyerProfilePieChart() {
    return (
        <div className="relative w-[20rem] h-[22rem] bg-[#1F2937] p-4 rounded-xl border border-[#374151] flex flex-col justify-center items-center">
            <div className="absolute  left-[50%] translate-x-[-50%]   text-[24px] text-white font-semibold flex flex-col justify-center items-center ">
                {percentage}% <span className="text-[#9CA3AF] text-[14px] font-light">Opened</span>
            </div>
            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    innerRadius={82}
                    fill="#e4e8ef"
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={-270}
                    endAngle={150}
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}
