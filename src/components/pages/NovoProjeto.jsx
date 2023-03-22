import { useNavigate } from 'react-router-dom';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';
import ProjectForm from '../project/ProjectForm';

function NovoProjeto() {
    const navigate = useNavigate();

    const createPost = (project) => {
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate('/projetos');
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="flex flex-col justify-center items-center min-h-[75%]">
            <Title customClass="mb-12">Criar Projeto</Title>
            <Paragraph customClass="mb-10">
                Crie seu projeto para depois adicionar os serviços
            </Paragraph>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </section>
    );
}

export default NovoProjeto;
