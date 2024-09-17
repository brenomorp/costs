import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#222] p-12 text-center text-white">
            <ul className="flex justify-center gap-8">
                <li className="hover:text-[#FFBB33]">
                    <FaFacebook className="text-2xl cursor-pointer" />
                </li>
                <li className="hover:text-[#FFBB33]">
                    <FaInstagram className="text-2xl cursor-pointer" />
                </li>
                <li className="hover:text-[#FFBB33]">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                </li>
            </ul>
            <p className="mt-8">
                <span className="text-[#ffbb33] font-bold">Costs</span> &copy;
                2023
            </p>
        </footer>
    );
}

export default Footer;
