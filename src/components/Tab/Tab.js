import { Tab } from '@headlessui/react'
import React, { Fragment, useState } from 'react'


const classNames = (...classes) => {
    // console.log(classes.filter(Boolean).join(" "))
    return classes.filter(Boolean).join(" ")
}


const tabList = [
    { title: "Tab 1", content: { heading: "Content 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident magni quis id quod quam maxime quidem ad, eos expedita exercitationem pariatur fugiat, veritatis voluptas sed dolorem cumque dolores suscipit, labore nostrum voluptates asperiores recusandae dolorum. Alias facilis pariatur ut. Ad nihil amet itaque minima similique. Eaque non nulla maxime." } },
    { title: "Tab 2", content: { heading: "Content 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident magni quis id quod quam maxime quidem ad, eos expedita exercitationem pariatur fugiat, veritatis voluptas sed dolorem cumque dolores suscipit, labore nostrum voluptates asperiores recusandae dolorum. Alias facilis pariatur ut. Ad nihil amet itaque minima similique. Eaque non nulla maxime." } },
    { title: "Tab 3", content: { heading: "Content 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident magni quis id quod quam maxime quidem ad, eos expedita exercitationem pariatur fugiat, veritatis voluptas sed dolorem cumque dolores suscipit, labore nostrum voluptates asperiores recusandae dolorum. Alias facilis pariatur ut. Ad nihil amet itaque minima similique. Eaque non nulla maxime." } },
]

const TabComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    console.log(selectedIndex)

    return (
        <div className="h-screen flex items-center justify-center">

            {/* Tab components */}
            {/* <Tab.Group className = "flex flex-col" as = "div">

            <Tab.List>
                  <Tab>Tab 1</Tab>
                  <Tab>Tab 2</Tab>
                  <Tab>Tab 3</Tab>
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel>
                    <h1>Content 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident magni quis id quod quam maxime quidem ad, eos expedita exercitationem pariatur fugiat, veritatis voluptas sed dolorem cumque dolores suscipit, labore nostrum voluptates asperiores recusandae dolorum. Alias facilis pariatur ut. Ad nihil amet itaque minima similique. Eaque non nulla maxime.</p>
                </Tab.Panel>
                <Tab.Panel>
                    <h1>Content 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident magni quis id quod quam maxime quidem ad, eos expedita exercitationem pariatur fugiat, veritatis voluptas sed dolorem cumque dolores suscipit, labore nostrum voluptates asperiores recusandae dolorum. Alias facilis pariatur ut. Ad nihil amet itaque minima similique. Eaque non nulla maxime.</p>
                </Tab.Panel>
                <Tab.Panel>
                    <h1>Content 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident magni quis id quod quam maxime quidem ad, eos expedita exercitationem pariatur fugiat, veritatis voluptas sed dolorem cumque dolores suscipit, labore nostrum voluptates asperiores recusandae dolorum. Alias facilis pariatur ut. Ad nihil amet itaque minima similique. Eaque non nulla maxime.</p>
                </Tab.Panel>
            </Tab.Panels>

        </Tab.Group> */}



            {/* CSS styling and using selected prop */}
            {/* <Tab.Group className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab as={Fragment} key = {index}>
                            {({ selected }) => (
                                <button className={`${selected ? " text-blue-500 bg-white  font-semibold" : "text-slate-200"} focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 `}>
                                    {tab.title}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key = {index} className = "bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group> */}


            {/* "   selected   " prop  in classNames function, on the top we have created "classNames" function  */}
            {/* <Tab.Group className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab key={index}
                            className={({ selected }) =>
                                classNames(
                                    selected ? " text-blue-500 bg-white font-semibold  " : "text-slate-200",
                                    "focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 "
                                )
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key={index} className="bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group> */}


            {/* disabling tab */}
            {/* <Tab.Group className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab key={index} disabled = {index === 1}
                            className={({ selected }) =>
                                classNames(
                                    
                                    selected ? " text-blue-500 bg-white font-semibold  " : "text-slate-200",
                                    " disabled:text-gray-500   focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 "
                                )
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key={index} className="bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group> */}



            {/* manual prop on Table.Group */}
            {/* <Tab.Group   manual        className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab key={index}
                            className={({ selected }) =>
                                classNames(

                                    selected ? " text-blue-500 bg-white font-semibold  " : "text-slate-200",
                                    " disabled:text-gray-500   focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 "
                                )
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key={index} className="bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group> */}


            {/* Vertical tabs,  css styling up to you, but in vertical state  enable navigating with the up and down arrow keys */}
            {/* <Tab.Group vertical  className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab key={index}
                            className={({ selected }) =>
                                classNames(

                                    selected ? " text-blue-500 bg-white font-semibold  " : "text-slate-200",
                                    " disabled:text-gray-500   focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 "
                                )
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key={index} className="bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group> */}



            {/* default index */}
            {/* <Tab.Group   defaultIndex={1}          className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab key={index}
                            className={({ selected }) =>
                                classNames(

                                    selected ? " text-blue-500 bg-white font-semibold  " : "text-slate-200",
                                    " disabled:text-gray-500   focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 "
                                )
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key={index} className="bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group> */}


            {/* Listening for changes, you will have more control */}
            {/* <Tab.Group 
            onChange={(index) => console.log("Changed selected tab to: ", index)}
             className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab key={index}
                            className={({ selected }) =>
                                classNames(

                                    selected ? " text-blue-500 bg-white font-semibold  " : "text-slate-200",
                                    " disabled:text-gray-500   focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 "
                                )
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key={index} className="bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group> */}

            {/* Controlling active tab */}
            <Tab.Group
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
                className="flex flex-col w-[450px]" as="div" >

                <Tab.List className="bg-white/10 grid grid-cols-3 p-[6px] rounded-lg">
                    {tabList.map((tab, index) => (
                        <Tab key={index}
                            className={({ selected }) =>
                                classNames(

                                    selected ? " text-blue-500 bg-white font-semibold  " : "text-slate-200",
                                    " disabled:text-gray-500   focus:ring ring-white/50 ring-offset-2 ring-offset-blue-500/50 outline-none w-full rounded-lg py-2 "
                                )
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {tabList.map((tab, index) => (
                        <Tab.Panel key={index} className="bg-white mt-2 rounded-lg text-slate-400 text-sm p-2">
                            <h1 className='text-lg text-sky-600 font-bold'>{tab.content.heading}</h1>
                            <p>{tab.content.text}</p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>

            </Tab.Group>





        </div>
    )
}

export default TabComponent