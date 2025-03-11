import React, { useEffect } from 'react';
import productsBG from '../assets/productsBG.png';
import keyboard from '../assets/keyboard.png';
import mouse from '../assets/mouse.png';
import controller from '../assets/controller.png';
import headphones from '../assets/headphones.png';
import keyboardBottom from '../assets/keyboardBottom.png';
import controller2 from '../assets/controller2.png';

const Products = () => {
    useEffect(() => {
        const tooltip = document.getElementById('tooltip');
        const images = document.querySelectorAll('img');

        images.forEach(image => {
            image.addEventListener('mouseenter', (e) => {
                const text = e.target.getAttribute('data-text');
                tooltip.textContent = text;
                tooltip.style.opacity = 1;
            });

            image.addEventListener('mousemove', (e) => {
                tooltip.style.left = `${e.pageX}px`;
                tooltip.style.top = `${e.pageY}px`;  // Adjust the vertical position as needed
            });

            image.addEventListener('mouseleave', () => {
                tooltip.style.opacity = 0;
            });
        });

        // Clean up event listeners when component unmounts
        return () => {
            images.forEach(image => {
                image.removeEventListener('mouseenter', () => { });
                image.removeEventListener('mousemove', () => { });
                image.removeEventListener('mouseleave', () => { });
            });
        };
    }, []);

    return (
        <div className="relative h-full w-full group">
            {/* Background Image */}
            <img
                src={productsBG}
                alt="Product Background"
                className="w-full h-full object-cover"
            />

            <img
                src={keyboard}
                alt="Keyboard"
                className="absolute top-7 left-3 h-110 transition-all duration-300 hover:drop-shadow-[0_0_15px_#44D62C] hover:scale-105 electrolize-regular"
                data-text="Shop For Keyboards!"
            />

            <img
                src={mouse}
                alt="Mouse"
                className="absolute top-64 left-180 h-64 transition-all duration-300 hover:drop-shadow-[0_0_15px_#44D62C] hover:scale-105"
                data-text="Shop For Mouse"
            />

            <img
                src={controller}
                alt="Controller"
                className="absolute bottom-0 left-220 h-46 transition-all duration-300 hover:drop-shadow-[0_0_15px_#44D62C] hover:scale-105"
                data-text="Shop For Controller"
            />

            <img
                src={headphones}
                alt="Headphones"
                className="absolute top-35 left-262 h-94 transition-all duration-300 hover:drop-shadow-[0_0_15px_#44D62C] hover:scale-105"
                data-text="Shop For Headphones"
            />

            <img
                src={keyboardBottom}
                alt="Keyboard Bottom"
                className="absolute bottom-0 right-0 h-68 transition-all duration-300 hover:drop-shadow-[0_0_15px_#44D62C] hover:scale-105"
            />

            <img
                src={controller2}
                alt="Controller2"
                className="absolute bottom-0 left-33 h-60 transition-all duration-300 hover:drop-shadow-[0_0_15px_#44D62C] hover:scale-105"
            />

            {/* Tooltip */}
            <div className="absolute text-white font-bold bg-black p-2 rounded opacity-0 pointer-events-none" id="tooltip">
                Tooltip Text
            </div>
        </div>
    );
};

export default Products;
