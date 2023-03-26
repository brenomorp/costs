import { useNavigate } from 'react-router-dom';
import Container from '../layout/Container';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';
import ProjectForm from '../project/ProjectForm';

function NovoProjeto() {
    const navigate = useNavigate();

    const createPost = (project) => {
        project.cost = 0;
        project.services = [];

        const baseUrl = 'http://localhost:5000/projects';

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate('/projetos', {
                    state: { message: 'Projeto criado com sucesso!' },
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container customClass="flex flex-wrap h-3/4 flex-col items-center justify-center">
            <Title customClass="mb-6">Criar Projeto</Title>
            <Paragraph customClass="mb-12">
                Crie seu projeto para depois adicionar os serviços
            </Paragraph>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </Container>
    );
}

export default NovoProjeto;
