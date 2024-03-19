import { CgMenu } from "react-icons/cg";
import Link from '../Link/Link';

const Header = () => {
    
    const routes = [
        {id: 1, name: "Home", path: "/home"}, 
        {id: 2, name: "About", path: "/about"},
        {id: 3, name: "Products", path: "/products"}, 
        {id: 4, name: "Contact", path: "/contact"}, 
        {id: 5, name: "Services", path: "/services"}
    ];

    
    return (

        <header className='max-w-screen-xl mx-auto'>
            <nav className='flex justify-between items-center'>
                <h1 className='text-5xl font-bold'>King Gym</h1>
                <div>
                    <button className="ml-8"><CgMenu className="text-2xl"></CgMenu></button>
                        <ul className='md:flex text-xl font-semibold lg:space-x-7 text-center'>
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