"use client"
import "./styles/navbar.css";
import "./styles/page.css";

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'

import Store from "./coins-tracker/store/store";


import {
	FaAngleRight,
	FaAngleLeft, 
	FaChartBar, 
	FaPenFancy, 
	FaCoins, 
	FaCog,
	FaSignOutAlt,
	FaBars,
	FaThLarge
} from 'react-icons/fa';



const ICON_SIZE = 20;

const links = [
	{ name: 'Tetris', href: '/examples/tetris', icon: <FaThLarge size={ICON_SIZE} />},
	{ name: 'Wordle', href: '/examples/wordle', icon: <FaPenFancy size={ICON_SIZE} />},
	{ name: 'Coins tracker', href: '/examples/coins-tracker', icon: <FaCoins size={ICON_SIZE} />},
	{ name: 'Animations', href: '/examples/animations', icon: <FaChartBar size={ICON_SIZE} />},
]

function Navbar({visible, show}) {
	const pathname = usePathname()

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<div className={`${!visible ? 'navbar' : ''} nav`}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<Link
						className="bg-green-500 py-4 px-2 rounded-lg cursor-pointer hover:bg-green-300 font-bolt whitespace-normal"
						href="/portfolio"
					>
							Back to portfolio
					</Link>
					<div className="links nav-top">
						{links.map((link) => {
							const isActive = pathname === link.href
							return (
								<Link
									className={`nav-link ${isActive && '!text-green-200' }  `}
									href={link.href} 
									key={link.name}
								>
									{link.icon}
									<span>{link.name}</span>
								</Link>
							)
						})}
						
					</div>
				</div>
			</div>
		</>
  );
}

export default function ExamplesLayout({ children }) {
  const [navVisible, showNavbar] = useState(true);

  return (
    <div className='root-page'>
			<Store>
				<Navbar visible={ navVisible } show={ showNavbar }/>
				<section className='children-page'>
					{children}
				</section>
			</Store>
    </div>
  )
}


  