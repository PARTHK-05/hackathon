import React from "react";
import social from "../assets/images/social.png";
import instagram from "../assets/images/instagram.png";
import threads from "../assets/images/threads.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import tiktok from "../assets/images/tiktok.png";
import twitch from "../assets/images/twitch.png";
import discord from "../assets/images/discord.png";

const Footer = () => {
    return (
        <footer className="bg-black w-full text-white py-10 mx-auto">
            <div className="container mx-auto px-6 flex flex-wrap justify-between">
                {/* Shop Section */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="text-lg font-bold">Shop</h4>
                    <div className="text-gray-400 space-y-2 mt-2">
                        <p className="hover:text-white hover:underline cursor-pointer">Razer Stores</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Store Locator</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Purchase Programs</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Bulk Order Program</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Education</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Only at Razer</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Razer Store Award</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Affiliate</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Newsletter</p>
                    </div>
                </div>

                {/* Explore Section */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="text-lg font-bold">Explore</h4>
                    <div className="text-gray-400 space-y-2 mt-2">
                        <p className="hover:text-white hover:underline cursor-pointer">Technology</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Chroma RGB</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Concepts</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Esports</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Collabs</p>
                    </div>
                </div>

                {/* Support Section */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="text-lg font-bold">Support</h4>
                    <div className="text-gray-400 space-y-2 mt-2">
                        <p className="hover:text-white hover:underline cursor-pointer">Get Help</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Registration & Warranty</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Razer Store Support</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Razer Care</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Manage Razer ID</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Support Videos</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Recycling Program</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Affiliate</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Accessibility Statement</p>
                    </div>
                </div>

                {/* Company Section */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h4 className="text-lg font-bold">Company</h4>
                    <div className="text-gray-400 space-y-2 mt-2">
                        <p className="hover:text-white hover:underline cursor-pointer">About Us</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Careers</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Newsroom</p>
                        <p className="hover:text-white hover:underline cursor-pointer">zVentures</p>
                        <p className="hover:text-white hover:underline cursor-pointer">Contact Us</p>
                    </div>
                </div>

                {/* Follow Us Section */}
                <div className="w-full md:w-1/5">
                    <h4 className="text-lg font-bold">Follow Us</h4>
                    <div className="flex space-x-4 mt-3 gap-3">
                        <img src={social} alt="Social" className="w-8 hover:scale-110 transition-transform" />
                        <img src={instagram} alt="Instagram" className="w-8 hover:scale-110 transition-transform" />
                        <img src={threads} alt="Threads" className="w-8 hover:scale-110 transition-transform" />
                        <img src={twitter} alt="Twitter" className="w-8 hover:scale-110 transition-transform" />
                        <img src={youtube} alt="YouTube" className="w-8 hover:scale-110 transition-transform" />
                        <img src={tiktok} alt="TikTok" className="w-8 hover:scale-110 transition-transform" />
                        <img src={twitch} alt="Twitch" className="w-8 hover:scale-110 transition-transform" />
                        <img src={discord} alt="Discord" className="w-8 hover:scale-110 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Game Slogan */}
            <div className="text-center text-[#44D62C] mt-8 text-xl font-semibold hover:text-shadow-lg transition-all duration-300">
                FOR GAMERS BY GAMERS
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-700 mt-8 py-4 text-gray-500 text-sm text-center flex flex-wrap justify-center space-x-6">
                <p>© {new Date().getFullYear()} Razer Inc. All rights reserved.</p>
                <p className="hover:underline cursor-pointer">Site Map</p>
                <p className="hover:underline cursor-pointer">Legal Terms</p>
                <p className="hover:underline cursor-pointer">Privacy Policy</p>
                <p className="hover:underline cursor-pointer">Cookie Settings</p>
            </div>
        </footer>
    );
};

export default Footer;