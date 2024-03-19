import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from '../Link/Link';
import { useState } from "react";

const Header = () => {
    const [menuOpen,setMenuOpen] =useState(true)
    const routes = [
        {id: 1, name: "Home", path: "/home"}, 
        {id: 2, name: "About", path: "/about"},
        {id: 3, name: "Products", path: "/products"}, 
        {id: 4, name: "Contact", path: "/contact"}, 
        {id: 5, name: "Services", path: "/services"}
    ];
    // $
    
    return (

        <header className='max-w-screen-xl mx-auto px-3 lg:px-0'>
            <nav className='flex justify-between md:items-center lg:py-5 py-4 overflow-x-hidden'>
                <h1 className='text-5xl font-bold text-white'>King Gym</h1>
                <div>
                    <button onClick={() => setMenuOpen(!menuOpen)} >{
                            menuOpen ? <CgMenu className="text-4xl text-white ml-8 md:hidden mt-4"></CgMenu> :  <IoClose className="text-4xl ml-8 md:hidden mt-4 text-white" ></IoClose>                 
                    }</button>
                        <ul  className={`md:flex md:static bg-[#050715]  transition-all duration-500 fixed  ${ menuOpen ? '-right-96' : 'right-0'}
                         p-5 text-lg font-normal `}>
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