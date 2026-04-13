import { useState, useEffect } from 'react'; // Adicionei o useEffect
import { addItem, removeItem, getItems } from '../services/api';


export function Lista({ onUpdate }: { onUpdate: () => void }) {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState<string[]>([]); 

  // Função para buscar os dados do servidor
  const carregarDados = async () => {
    const dados = await getItems("lista");
    setLista(dados || []); 
  };

  // Executa assim que a tela abre
 useEffect(() => {
    let active = true;

    const fetchData = async () => {
      const dados = await getItems("lista");
      if (active) {
        setLista(dados || []);
      }
    };

    fetchData();
    return () => { active = false; }; // Cleanup para evitar erros de memória
  }, []);

  const handleAdd = async () => {
    await addItem(item, "lista");
    setItem(""); 
    carregarDados(); // Atualiza a lista após adicionar
      onUpdate(); 
  };

  const handleRemove = async () => {
    await removeItem("lista");
    carregarDados(); // Atualiza a lista após remover
      onUpdate(); 
  };





  return (
    <div>
      <h1>Estrutura de Lista</h1>
      <input 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Novo item..." 
      />
      <button onClick={handleAdd}>Adicionar na Lista</button>
      <button onClick={handleRemove}>Remover da Lista</button>

      
      <ul>
        {lista.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </div>
  );
}