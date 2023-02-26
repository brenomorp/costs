import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';
import ProjectForm from '../project/ProjectForm';

function NovoProjeto() {
    return (
        <section className="flex flex-col justify-center items-center min-h-[75%]">
            <Title customClass="mb-12">Criar Projeto</Title>
            <Paragraph customClass="mb-10">
                Crie seu projeto para depois adicionar os serviços
            </Paragraph>
            <ProjectForm btnText="Criar Projeto" />
        </section>
    );
}

export default NovoProjeto;
