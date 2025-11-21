import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="backdrop-blur-lg bg-black/10 py-2 md:p-4 md:px-10 px-6 fixed top-0 w-full flex z-10 justify-between items-center">
            <h1 className="text-[#FCA311] text-3xl font-semibold">NESTORA</h1>
            <div className='hidden md:flex justify-center items-center'>
                <ul className="flex space-x-9 font-semibold">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'text-[#FCA311] transition-colors ease-in-out' : 'text-white hover:text-gray-300'}>BUY</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sell" className={({isActive}) => isActive ? 'text-[#FCA311] transition-colors ease-in-out' : 'text-white  hover:text-gray-300'}>SELL</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'text-[#FCA311] transition-colors ease-in-out' : 'text-white hover:text-gray-300'}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-[#FCA311] transition-colors ease-in-out' : 'text-white hover:text-gray-300'}>CONTACT</NavLink>
                    </li>
                </ul>
            </div>
            
            <ul className="hidden md:flex space-x-6 font-bold justify-center items-center">
                <li><a href="#" className="text-white hover:text-gray-300">LOGIN</a></li>
                <li><a href="#" className="bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition">SIGN UP</a></li>
            </ul>

            <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </nav>
    )
}

export default Nav