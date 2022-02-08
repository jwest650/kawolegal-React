import React from "react";
import {
    RiFacebookLine,
    RiTwitterFill,
    RiLinkedinLine,
    RiInstagramLine,
} from "react-icons/ri";
const Footer = () => {
    return (
        <>
            <footer className="bg-[#390404] text-white md:px-20 md:text-base text-sm  p-2 flex justify-between items-center">
                <h6>&copy; 2017 kawolegal all right reserved</h6>
                <div className="flex pr-3 space-x-4">
                    <RiFacebookLine />
                    <RiTwitterFill />
                    <RiLinkedinLine />
                    <RiInstagramLine />
                </div>
            </footer>
        </>
    );
};

export default Footer;
