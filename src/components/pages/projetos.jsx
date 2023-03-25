import Container from '../layout/Container';
import Message from '../layout/Message';
import { useLocation } from 'react-router-dom';

function Projetos() {
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }

    return (
        <Container customClass="h-3/4 flex-col items-center">
            <p>Projetos</p>
            <Message msg={message} type="success" />
        </Container>
    );
}

export default Projetos;
