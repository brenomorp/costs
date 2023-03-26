import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function ProjectCard({
    id,
    name,
    category,
    budget,
    handleRemove,
}) {
    const StyledP = ({ children, customClass }) => {
        return (
            <p className={`text-[#7a7a7a] mb-4 ${customClass || ''}`}>
                {children}
            </p>
        );
    };

    const CategoryMap = {
        infra: 'bg-[#ffaebc]',
        desenvolvimento: 'bg-[#a0e7e5]',
        design: 'bg-[#b4f8c8]',
        planejamento: 'bg-[#fbe7c6]',
    };

    const projectCategory = CategoryMap[category.toLowerCase()];

    return (
        <div className="p-4 border border-solid border-[#7a7a7a] rounded-md w-[24%] m-[0.5%]">
            <h4 className="bg-[#222] text-[#ffbb33] p-2 mb-5 text-xl">
                {name}
            </h4>
            <StyledP>
                <span className="font-bold">Orçamento</span> R${budget}
            </StyledP>
            <StyledP customClass={'flex items-center'}>
                <span
                    className={`block rounded-full w-3 h-3 mr-2 ${projectCategory}`}
                ></span>{' '}
                {category}
            </StyledP>
            <div className="flex gap-4 justify-center items-center mt-5">
                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 bg-white text-[#222] text-base py-2 px-4 border border-[#222] border-solid cursor-pointer duration-500 hover:bg-[#222] hover:text-[#ffbb33]"
                >
                    <BsPencil /> Editar
                </Link>
                <button className="flex items-center justify-center gap-2 bg-white text-[#222] text-base py-2 px-4 border border-[#222] border-solid cursor-pointer duration-500 hover:bg-[#222] hover:text-[#ffbb33]">
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}
