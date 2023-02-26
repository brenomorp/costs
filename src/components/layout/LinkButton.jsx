import { Link } from 'react-router-dom';

function LinkButton({ to, text }) {
    return (
        <Link
            className="bg-[#222] text-white text-2xl py-2 px-4 duration-500 hover:text-[#ffbb33]"
            to={to}
        >
            {text}
        </Link>
    );
}

export default LinkButton;
