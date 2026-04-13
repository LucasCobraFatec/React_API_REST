import { useState, useEffect } from 'react'; // Adicionei o useEffect
import { addItem, removeItem, getItems } from '../services/api';

export function Fila() {
  const [item, setItem] = useState("");
  const [fila, setFila] = useState<string[]>([]); 

  
  const carregarDados = async () => {
    const dados = await getItems("fila");
    setFila(dados || []); 
  };

  // Executa assim que a tela abre
 useEffect(() => {
    let active = true;

    const fetchData = async () => {
      const dados = await getItems("fila");
      if (active) {
        setFila(dados || []);
      }
    };

    fetchData();
    return () => { active = false; }; // Cleanup para evitar erros de memória
  }, []);

  const handleAdd = async () => {
    await addItem(item, "fila");
    setItem(""); 
    carregarDados(); 
  };

  const handleRemove = async () => {
    await removeItem("fila");
    carregarDados(); 
  };

  return (
    <div>
      <h1>Estrutura de Filas</h1>
      <input 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Novo item..." 
      />
      <button onClick={handleAdd}>Adicionar na Fila</button>
      <button onClick={handleRemove}>Remover da Fila</button>

      
      <ul>
        {fila.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </div>
  );
}