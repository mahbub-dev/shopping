import{ useState } from 'react';
import icon from '../assets/icon/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-orange-400 py-4 px-5 md:px-10">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={icon} alt="Logo" className="h-8 w-auto" />
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleNavbar}
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            )}
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-end absolute md:static top-[64px] bg-orange-400 right-0 p-5 md:p-0 md:flex md:items-center space-x-4`}
                >
                    <a href="#" className="text-white hover:text-gray-300">
                        Signup
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Login
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Cart
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Order
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Dashboard
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
