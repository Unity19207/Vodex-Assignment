import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus, getAssigneeStatus } from '../lib/helpers'

const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        AssigneeName: 'Carrie Harris',
        customer_name: 'Carolyn Perkins',
        order_date: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'NEW',
        Email: 'eileen_h@hotmail.com'
    },
    {
        id: '2',
        product_id: '5434',
        customer_id: '65345',
        AssigneeName: 'Toni Lane',
        customer_name: 'Terrance Moreno',
        order_date: '2022-05-17T07:14:00',
        order_total: '$836.44',
        current_order_status: 'Sold',
        Email: 'terrance_moreno@infotech.io'
    },
    {
        id: '3',
        product_id: '9854',
        customer_id: '87832',
        AssigneeName: 'Joanne Mendoza',
        customer_name: 'Ron Vargas',
        order_date: '2022-05-16T12:40:00',
        order_total: '$334.50',
        current_order_status: 'Sold',
        Email: 'terrance_moreno@infotech.io'
    },
    {
        id: '4',
        product_id: '8763',
        customer_id: '09832',
        AssigneeName: 'Lorraine Carr',
        customer_name: 'Luke Cook',
        order_date: '2022-05-14T03:24:00',
        order_total: '$876.00',
        current_order_status: 'Not Interested',
        Email: 'terrance_moreno@infotech.io'
    },
    {
        id: '5',
        product_id: '5627',
        customer_id: '97632',
        AssigneeName: 'Myrtle Mason',
        customer_name: 'Joyce Freeman',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'In Progress',
        Email: 'joyce991@infotech.io'
    }
]

export default function RecentOrders() {
    return (
        <>
            <div className="flex flex-col w-full gap-6 flex-wrap">
                <div className="bg-[#1F2937] px-4 pt-3 pb-4 rounded-xl flex flex-wrap justify-between items-center ">
                    <button className="text-white font-medium bg-[#374151] px-8 py-3 w-[286px]  border border-[#374151] rounded">
                        NEW{' '}
                    </button>
                    <button className="text-white font-medium bg-[#374151] px-8 py-3 w-[286px]  border border-[#374151] rounded">
                        No Show
                    </button>
                    <button className="text-white font-medium bg-[#374151] px-8 py-3 w-[286px]  border border-[#374151] rounded">
                        Target
                    </button>
                    <button className="text-white font-medium bg-[#374151] px-8 py-3 w-[286px]  border border-[#374151] rounded">
                        Paid
                    </button>
                </div>
                <div className="bg-[#1F2937] px-4 pt-3 pb-4 rounded-xl border border-[#374151] flex-1">
                    <div className="flex justify-between items-center">
                        <strong className="text-[#9CA3AF] font-medium">Leads</strong>
                        <button className="text-white font-medium bg-[#374151] px-3 py-2 rounded">
                            View All Leads
                        </button>
                    </div>

                    <div className=" rounded-xl mt-3 ">
                        <table className="w-full text-[#9CA3AF]   ">
                            <thead>
                                <tr className="bg-[#374151]">
                                    <th className="border-[#374151] uppercase">Customer Name</th>
                                    <th className="border-[#374151] uppercase">Order Status</th>
                                    <th className="border-[#374151] uppercase">EMAIL</th>
                                    <th className="border-[#374151] uppercase">CREATED TIME</th>
                                    <th className="border-[#374151] uppercase">ASSIGNEE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrderData.map((order) => (
                                    <tr key={order.id}>
                                        <td className="border-[#374151]">
                                            <Link className="text-[#9CA3AF]" to={`/customer/${order.customer_id}`}>
                                                {order.customer_name}
                                            </Link>
                                        </td>
                                        <td className="border-[#374151]">
                                            {getOrderStatus(order.current_order_status)}
                                        </td>
                                        <td className="border-[#374151]">{order.Email}</td>
                                        <td className="border-[#374151]">
                                            {format(new Date(order.order_date), 'dd/MM/yyyy HH:mm')}
                                        </td>
                                        <td className="border-[#374151]">{getAssigneeStatus(order.AssigneeName)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
