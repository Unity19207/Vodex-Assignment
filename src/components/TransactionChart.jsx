import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
    {
        name: 'Jan',
        Expense: 40,
        Income: 50
    },
    {
        name: 'Feb',
        Expense: 50,
        Income: 60
    },
    {
        name: 'Mar',
        Expense: 60,
        Income: 70
    },
    {
        name: 'Apr',
        Expense: 70,
        Income: 80
    },
    {
        name: 'May',
        Expense: 80,
        Income: 90
    },
    {
        name: 'Jun',
        Expense: 90,
        Income: 100
    },
    {
        name: 'July',
        Expense: 100,
        Income: 110
    },
    {
        name: 'Aug',
        Expense: 90,
        Income: 100
    },
    {
        name: 'Sep',
        Expense: 80,
        Income: 90
    },
    {
        name: 'Oct',
        Expense: 70,
        Income: 80
    },
    {
        name: 'Nov',
        Expense: 50,
        Income: 60
    },
    {
        name: 'Dec',
        Expense: 40,
        Income: 50
    }
]

export default function TransactionChart() {
    return (
        <div className="h-[22rem] bg-[#1F2937] p-4 rounded-xl border border-[#374151] flex flex-col flex-1">
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />

                        <Bar barSize={20} dataKey="Income" fill="#4F46E5" />
                        <Bar barSize={20} dataKey="Expense" fill="#10B981" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
