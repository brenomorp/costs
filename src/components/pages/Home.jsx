import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className="flex flex-col justify-center items-center min-h-[75%] w-[1200px] mx-auto">
            <h1 className="text-6xl font-bold mb-12">
                Bem-vindo ao{' '}
                <span className="text-[#ffbb33] bg-[#222] px-[0.2em]">
                    Costs
                </span>
            </h1>
            <p className="mb-10 text-[#7b7b7b] text-2xl">
                Comece a gerenciar seus projetos agora mesmo!
            </p>
            <LinkButton to="/novoprojeto" text="Criar Projeto" />
            <img src={savings} alt="Costs" className="w-[350px] mt-16" />
        </section>
    );
}

export default Home;
