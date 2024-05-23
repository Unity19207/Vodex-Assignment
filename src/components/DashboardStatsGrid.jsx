import React from 'react'
import { IoPersonCircleSharp, IoCalendar, IoDocumentText, IoMail } from 'react-icons/io5'

function BoxWrapper({ children }) {
    return (
        <div className="bg-[#1F2937] rounded-lg p-4 flex-1 border border-[#374151] flex items-center">{children}</div>
    )
}

export default function DashboardStatsGrid() {
    return (
        <div className="flex gap-4">
            <BoxWrapper>
                <div className="rounded-md h-12 w-12 flex items-center justify-center bg-[#D9D7F4]">
                    <IoPersonCircleSharp className="text-2xl text-[#4338CA]" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-white font-medium">
                        <span className="text-[24px] font-semibold">63</span> New Leads
                    </span>
                    <div className="flex items-center">
                        <span className="text-sm text-green-500 pr-2">+2.6</span>
                        <strong className="text-sm text-[#9CA3AF] font-normal">this month</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-md h-12 w-12 flex items-center justify-center bg-[#DCFCE7]">
                    <IoDocumentText className="text-2xl text-[#16A34A]" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-white font-medium">
                        <span className="text-[24px] font-semibold">25</span> Email
                    </span>
                    <div className="flex items-center">
                        <span className="text-sm text-green-500 pr-2">+2.6</span>
                        <strong className="text-sm text-[#9CA3AF] font-normal">this month</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-md h-12 w-12 flex items-center justify-center bg-[#CFFAFE]">
                    <IoMail className="text-2xl text-[#0891B2]" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-white font-medium">
                        <span className="text-[24px] font-semibold">49</span> Praposals
                    </span>
                    <div className="flex items-center">
                        <span className="text-sm text-green-500 pr-2">+2.6</span>
                        <strong className="text-sm text-[#9CA3AF] font-normal">this month</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-md h-12 w-12 flex items-center justify-center bg-[#FEF3C7]">
                    <IoCalendar className="text-2xl text-[#F59E0B]" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-white font-medium">
                        <span className="text-[24px] font-semibold">12</span> Appointment
                    </span>
                    <div className="flex items-center">
                        <span className="text-sm text-green-500 pr-2">+2.6</span>
                        <strong className="text-sm text-[#9CA3AF] font-normal">this month</strong>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}
