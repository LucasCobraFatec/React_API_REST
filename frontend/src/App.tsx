import { Routes, Route, Link } from 'react-router-dom';
import { Pilha } from './pages/Pilha';
import { Fila } from './pages/Fila';
import { Lista } from './pages/Lista';

function App() {
  return (
    <div className="App">
      {/* Esse é o seu Menu */}
      <nav style={{ padding: '20px', background: '#282c34', color: 'white' }}>
        <Link to="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
        <Link to="/pilha" style={{ margin: '10px', color: 'white' }}>Pilha</Link>
        <Link to="/fila" style={{ margin: '10px', color: 'white' }}>Fila</Link>
        <Link to="/lista" style={{ margin: '10px', color: 'white' }}>Lista</Link>
      </nav>

      {/* Aqui é onde a página "troca" */}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/pilha" element={<Pilha />} />
          <Route path="/fila" element={<Fila />} />
          <Route path="/lista" element={<Lista />} />
          {/* Rota padrão (Home) */}
          <Route path="/" element={<h1>Bem-vindo ao SE LIGA NESSES DEVS! Selecione uma estrutura no menu.</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;