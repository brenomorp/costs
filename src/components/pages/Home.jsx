import savings from '../../img/savings.svg';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

function Home() {
    return (
        <Container customClass="flex flex-col justify-center items-center h-3/4">
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
        </Container>
    );
}

export default Home;
