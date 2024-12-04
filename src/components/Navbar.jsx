import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    Professional Directory
                </Link>
                <div>
                    <Link to="/signup" className="mr-4">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
