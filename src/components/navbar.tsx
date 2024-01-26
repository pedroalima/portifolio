"use client";
import { useRouter } from "next/navigation";

const navItems = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Projects",
    "Contact"
];

export default function Navbar() {
    const route = useRouter();

    const handleClick = () => {
        route.push("/login");
    };

    return (
        <header className="fixed top-0 w-full z-30">
            <nav>
                <div className="max-w-screen-xl opacity-75 bg-gray-200 rounded-xl flex flex-wrap items-center justify-between mx-auto py-1 px-4 m-6">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800"><strong className="text-gray-900">Pedro</strong> Lima</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button 
                            onClick={handleClick}
                            type="button" 
                            className="text-gray-950 hover:text-gray-50 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >Login</button>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <div className="flex flex-col font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    className="block py-2 px-3 md:p-0 text-gray-950 rounded bg-transparent hover:text-blue-500"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}