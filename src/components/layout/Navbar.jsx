import { Link } from 'react-router-dom';
import logo from '../../img/costs_logo.png';

function Navbar() {
    return (
        <header className="bg-[#222]">
            <nav className="flex justify-between p-4 w-[1200px] mx-auto">
                <Link to="/">
                    <img src={logo} alt="Costs Logo" />
                </Link>
                <ul className="flex text-white text-xl items-center gap-4">
                    <li className="hover:text-[#ffbb33]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-[#ffbb33]">
                        <Link to="projetos">Projetos</Link>
                    </li>
                    <li className="hover:text-[#ffbb33]">
                        <Link to="empresa">Empresa</Link>
                    </li>
                    <li className="hover:text-[#ffbb33]">
                        <Link to="contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
