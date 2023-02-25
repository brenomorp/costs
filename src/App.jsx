import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';

function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="empresa">Empresa</Link>
                <Link to="contato">Contato</Link>
                <Link to="novoprojeto">Novo Projeto</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="empresa" element={<Empresa />} />
                <Route path="contato" element={<Contato />} />
                <Route path="novoprojeto" element={<NovoProjeto />} />
            </Routes>
        </Router>
    );
}

export default App;
