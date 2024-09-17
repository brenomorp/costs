import Container from '../layout/Container';
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';
import Title from '../layout/Title';
import ProjectCard from '../project/ProjectCard';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Projetos() {
    const [project, setProject] = useState([]);
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        const baseUrl = 'http://localhost:5000/projects';
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setProject(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="flex justify-between w-[1200px] mx-auto p-8">
                <Title>Meus projetos</Title>
                <LinkButton to="/novoprojeto" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="flex flex-wrap items-center justify-center mt-16 overflow-y-scroll">
                {project.map((item) => {
                    return (
                        <ProjectCard
                            id={item.id}
                            name={item.name}
                            category={item.category.name}
                            budget={item.budget}
                            key={item.id}
                        />
                    );
                })}
            </Container>
        </>
    );
}

export default Projetos;
