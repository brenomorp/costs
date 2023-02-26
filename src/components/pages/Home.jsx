import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

function Home() {
    return (
        <section className="flex flex-col justify-center items-center min-h-[75%] w-[1200px] mx-auto">
            <Title customClass="mb-12">
                Bem-vindo ao{' '}
                <span className="text-[#ffbb33] bg-[#222] px-[0.2em]">
                    Costs
                </span>
            </Title>
            <Paragraph customClass="mb-10">
                Comece a gerenciar seus projetos agora mesmo!
            </Paragraph>
            <LinkButton to="/novoprojeto" text="Criar Projeto" />
            <img src={savings} alt="Costs" className="w-[350px] mt-16" />
        </section>
    );
}

export default Home;
