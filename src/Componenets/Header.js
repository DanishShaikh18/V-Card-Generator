// src/Header.js
import React from 'react';

function Header() {
    return (
        <header className="bg-yellow-500 w-full h-auto  px-4 py-2 flex items-center justify-center">

            <img
                src="/images/logo.png"
                alt="Logo"
                className="object-contain max-w-full h-auto"
            />
        </header>
    );
}

export default Header;
