// src/Header.js
import React from 'react';

function Header() {
    return (
        <header className="bg-yellow-500 w-full h-auto  px-4 py-2 flex items-center justify-center">
            {/* Image */}
            <img
                src="/images/logo.png"
                alt="Header Image"
                className="object-contain max-w-full h-auto"
            />
        </header>
    );
}

export default Header;
