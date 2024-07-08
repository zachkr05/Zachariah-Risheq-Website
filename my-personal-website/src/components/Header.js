import React from 'react';

function Header() {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl">Welcome to My Personal Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
                        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
