import Image from "next/image";
import {IoBrowsers, IoCalculator, IoFootball, IoLogoReact} from 'react-icons/io5'
import { SideBarMenuItem } from "./";

const menuItem = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsers size={40} />,
    title: 'Dashboard',
    subTitle: 'Visual'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Customers counter'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'Estatics Generation'
  },
]

export function SideBar() {
  return (
    <div
      id="menu"
      style={{
        width: '400px'
      }}
      className="left-0 z-10 w-64 h-screen min-h-screen overflow-y-scroll bg-gray-900 text-slate-300"
    >
      <div id="logo" className="px-6 my-4">
        <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
          <IoLogoReact className="mr-2"/>
          <span>Mister</span> 
          <span className="text-blue-500">DAN</span>
        </h1>
        <p className="text-sm text-slate-500">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center mt-2 space-x-2">
          <span>
            <Image
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
              width={80}
              height={80}
            />
          </span>
          <span className="text-sm font-bold md:text-base">Daniel Caceres</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">

        {menuItem.map(item => (
          <SideBarMenuItem 
            key={item.path}
            {...item}
          />
        ))}
      
      </div>
    </div>
  );
}
