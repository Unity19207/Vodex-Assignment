import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import Logo from './LOGO.png'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#374151] hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="bg-[#111827]  w-60 p-3 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3">
                <img src={Logo} alt="" />
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div className="flex flex-col gap-0.5 pt-2 border-t border-[#111827]">
                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                        <SidebarLink key={link.key} link={link} />
                    ))}
                    <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                        <span className="text-xl">
                            <HiOutlineLogout />
                        </span>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

function SidebarLink({ link }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-[#374151] text-white' : 'text-white', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}
