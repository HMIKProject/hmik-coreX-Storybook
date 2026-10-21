import React, { useState, useRef, useEffect } from 'react';
import logoUper from '../../assets/logo-UP.svg';
import logoHmik from '../../assets/logo-hmik.svg';
import './Navbar.css';

export const Navbar = ({ activeMenu: initialActive = 'Beranda', onMenuClick }) => {
    const [activeMenu, setActiveMenu] = useState(initialActive);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRefs = useRef([]);

    const menuItems = ['Beranda', 'Tentang Kami', 'Departemen'];

    useEffect(() => {
        const activeIndex = menuItems.indexOf(activeMenu);
        const activeElement = navRefs.current[activeIndex];

        if (activeElement && window.innerWidth > 768) {
            setIndicatorStyle({
                left: `${activeElement.offsetLeft}px`,
                width: `${activeElement.offsetWidth}px`,
            });
        }
    }, [activeMenu, isMenuOpen]);

    const handleLinkClick = (item, index, e) => {
        e.preventDefault();
        setActiveMenu(item);
        setIsMenuOpen(false);
        if (onMenuClick) onMenuClick(item);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-brand">
                <img
                    src={logoUper}
                    alt="Universitas Pertamina"
                    className="brand-logo uper-logo"
                />
                <img
                    src={logoHmik}
                    alt="HMIK Logo"
                    className="brand-logo hmik-logo"
                />
                <div className="brand-text">
                    <span className="brand-subtitle">Himpunan Mahasiswa Ilmu Komputer</span>
                    <span className="brand-title">Universitas Pertamina</span>
                </div>
            </div>
            
            <div className="hamburger" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            </div>

            <div className={`navbar-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <div className="nav-links-wrapper">
                    <ul className="nav-links">
                        {menuItems.map((item, index) => (
                            <li key={item}>
                                <a
                                    ref={(el) => (navRefs.current[index] = el)}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={`nav-link ${activeMenu === item ? 'active' : ''}`}
                                    onClick={(e) => handleLinkClick(item, index, e)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {!isMenuOpen && <div className="nav-active-indicator" style={indicatorStyle} />}
                </div>

                <button className="nav-btn-contact">
                    Kontak
                </button>
            </div>
        </nav>
    );
};