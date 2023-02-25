import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Projetos from './components/pages/projetos';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="novoprojeto" element={<NovoProjeto />} />
                <Route path="empresa" element={<Empresa />} />
                <Route path="contato" element={<Contato />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
