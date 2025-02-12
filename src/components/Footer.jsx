import React from 'react'
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#231d1d] p-12">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="navbar__logo">
                        <a href="#">
                            <h3 className='text-2xl text-white'>Products</h3>
                        </a>
                    </div>
                    <ul className="flex gap-4 text-white">
                        <li className="footer__item">
                            <a target="_blank" href="https://t.me/samandar_2317" className="footer__link">
                                <FaTelegram className='text-[30px] text-aliceblue transition duration-300 ease-in-out hover:text-dodgerblue hover:scale-105' />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                <FaInstagram className='text-[30px] text-aliceblue transition duration-300 ease-in-out hover:text-dodgerblue hover:scale-105' />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://github.com/alimardonov2317" className="footer__link">
                                <FaGithub className='text-[30px] text-aliceblue transition duration-300 ease-in-out hover:text-dodgerblue hover:scale-105' />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
