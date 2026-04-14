import { Routes, Route, Link } from "react-router-dom";
import { Pilha } from "./pages/Pilha";
import { Fila } from "./pages/Fila";
import { Lista } from "./pages/Lista";
import { useState, useEffect } from "react";
import { getStats } from "./services/api";


interface StatsData {
  total: number;
  resumo: string;
}




function App() {
  const [stats, setStats] = useState<StatsData | null>(null);

 async function myStats() {
    const data = await getStats();
    setStats(data);
  }

 useEffect(() => {
   
    const loadStats = async () => {
      await myStats();
    };

    loadStats(); 
  }, []); 

  return (
    <div className="App">
      {/* Esse é o seu Menu */}
      <nav
        style={{
          padding: "20px",
          background: "#282c34",
          color: "white",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div style={{ display: "flex" }}>
          <Link to="/" style={{ margin: "10px", color: "white" }}>
            Home
          </Link>
          <Link to="/pilha" style={{ margin: "10px", color: "white" }}>
            Pilha
          </Link>
          <Link to="/fila" style={{ margin: "10px", color: "white" }}>
            Fila
          </Link>
          <Link to="/lista" style={{ margin: "10px", color: "white" }}>
            Lista
          </Link>
        </div>
        <div style={{ display: "flex", padding: "10px", gap: "20px" }}>
            <span>Total: {stats?.total ?? 0}</span>
            <span>Resumo: {stats?.resumo ?? "Nenhum"}</span>
        </div>
      </nav>

      {/* Aqui é onde a página "troca" */}
      <div style={{ padding: "20px" }}>
        <Routes>
         <Route path="/pilha" element={<Pilha onUpdate={myStats} />} />
         <Route path="/fila" element={<Fila onUpdate={myStats} />} />
          <Route path="/lista" element={<Lista onUpdate={myStats} />} />
          {/* Rota padrão (Home) */}
          <Route
            path="/"
            element={
              <h1>
                Selecione uma estrutura no  menu.
              </h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
