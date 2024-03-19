import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from '../Link/Link';
import { useState } from "react";

const Header = () => {
    const [menuOpen,setMenuOpen] =useState(false)
    const routes = [
        {id: 1, name: "Home", path: "/home"}, 
        {id: 2, name: "About", path: "/about"},
        {id: 3, name: "Products", path: "/products"}, 
        {id: 4, name: "Contact", path: "/contact"}, 
        {id: 5, name: "Services", path: "/services"}
    ];
    // ${menuOpen ? '-right-96 ' : 'right-0'}
    
    return (

        <header className='max-w-screen-xl mx-auto px-3 lg:px-0'>
            <nav className='flex justify-between md:items-center lg:py-5 py-4 overflow-x-hidden'>
                <h1 className='text-5xl font-bold'>King Gym</h1>
                <div>
                    <button onClick={() => setMenuOpen(!menuOpen)} >{
                            menuOpen ? <CgMenu className="text-4xl ml-8 md:hidden mt-4"></CgMenu> :  <IoClose className="text-4xl ml-8 md:hidden mt-4" ></IoClose>                 
                    }</button>
                        <ul className={`md:flex bg-sky-300 md:static  transition-a duration-1000 absolute ${!menuOpen && 'hidden -right-96'}
                         p-5 text-xl font-semibold `}>
                            {
                            routes.map( route => <Link key={route.id} route={route}></Link>)
                            }
                        </ul>
                </div>
            </nav>
        </header>
    );
};



export default Header;