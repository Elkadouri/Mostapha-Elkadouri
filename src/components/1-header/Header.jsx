import { useEffect, useState } from "react";
import './header.css';
import { motion } from 'framer-motion';

function Header() {
    const [showModal, setShowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('mode') ?? 'dark');

    useEffect(() => {
        console.log('Current theme:', theme); // Debugging statement
        if (theme) {
            const oppositeTheme = theme === 'dark' ? 'light' : 'dark';
            console.log('Removing theme:', oppositeTheme);
            console.log('Adding theme:', theme);
            document.body.classList.remove(oppositeTheme);
            document.body.classList.add(theme);
            localStorage.setItem('mode', theme);
        }
    }, [theme]);

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex"
        >
            <button
                onClick={() => setShowModal(true)}
                className="menu flex icon-menu"
            />

            <div />

            <nav>
                <ul className="flex">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mode flex"
            >
                <span className={theme === 'dark' ? 'icon-moon-o' : 'icon-sun'}></span>
            </button>

            {showModal && (
                <div className="fixed">
                    <ul className="modal">
                        <li><button className="icon-close" onClick={() => setShowModal(false)} /></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </motion.header>
    );
}

export default Header;
