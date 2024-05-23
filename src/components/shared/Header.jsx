import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt, HiOutlineGlobe, HiMenuAlt2 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import ProfilePhoto from './ProfilePhoto.png'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-[#1F2937] h-16 px-4 flex items-center border-b border-[#374151] justify-between">
            <div className="relative space-x-8 ">
                <HiMenuAlt2 fontSize={20} className="text-[#9CA3AF] absolute top-1/2 left-3 -translate-y-1/2" />
                <HiOutlineSearch fontSize={20} className="text-[#9CA3AF] absolute top-1/2 left-3 -translate-y-1/2" />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-[#1F2937]',
                                    'group inline-flex items-center rounded-sm p-1.5 text-[#9CA3AF] hover:text-opacity-100 focus:outline-none '
                                )}
                            >
                                <HiOutlineGlobe fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-[#1F2937] rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-white font-medium">Select Country</strong>
                                        <div className="mt-2 py-1 text-sm text-white">This is messages panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-[#1F2937]',
                                    'group inline-flex items-center rounded-sm p-1.5 text-[#9CA3AF] hover:text-opacity-100 focus:outline-none '
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-[#1F2937] rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-white font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm text-white">This is messages panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-[#1F2937]',
                                    'group inline-flex items-center rounded-sm p-1.5 text-[#9CA3AF] hover:text-opacity-100 focus:outline-none '
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-[#1F2937] rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-white font-medium">Notifications</strong>
                                        <div className="mt-2 py-1 text-sm text-white">This is notification panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">Open user menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-[sky-500] bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(${ProfilePhoto})` }}
                            >
                                <span className="sr-only">Marc Backes</span>
                            </div>
                            <div className="flex flex-col justify-between items-start pl-2 text-[#9CA3AF]">
                                <span className="text-xs">Admin</span>{' '}
                                <span className="text-md font-semibold">Carolyn Perkins</span>{' '}
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-[#1F2937] ring-1 ring-[#1F2937] ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/profile')}
                                        className={classNames(
                                            active && 'bg-[#1F2937]',
                                            'active:bg-[#1F2937] rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-[#1F2937]'
                                        )}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/settings')}
                                        className={classNames(
                                            active && 'bg-[#1F2937]',
                                            'active:bg-[#1F2937] rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-[#1F2937]'
                                        )}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-[#1F2937]',
                                            'active:bg-[#1F2937] rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-[#1F2937]'
                                        )}
                                    >
                                        Sign out
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
