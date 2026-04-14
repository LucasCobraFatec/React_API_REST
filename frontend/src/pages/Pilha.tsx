import { useState, useEffect } from "react"; // Adicionei o useEffect
import { addItem, removeItem, getItems } from "../services/api";

export function Pilha({ onUpdate }: { onUpdate: () => void }) {
  const [item, setItem] = useState("");
  const [pilha, setPilha] = useState<string[]>([]); // Novo estado para a pilha

  // Função para buscar os dados do servidor
  const carregarDados = async () => {
    const dados = await getItems("pilha");
    setPilha(Array.isArray(dados) ? dados : []);
  };

  // Executa assim que a tela abre
  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      const dados = await getItems("pilha");
      if (active) {
        setPilha(Array.isArray(dados) ? dados : []);
      }
    };

    fetchData();
    return () => {
      active = false;
    }; // Cleanup para evitar erros de memória
  }, []);

  const handleAdd = async () => {
    await addItem(item, "pilha");
    setItem("");
    carregarDados(); // Atualiza a pilha após adicionar
      onUpdate(); 
  };

  const handleRemove = async () => {
    await removeItem("pilha");
    carregarDados(); // Atualiza a pilha após remover
      onUpdate(); 
  };

  return (
    <div>
      <h1>Estrutura de Pilha</h1>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Novo item..."
      />
      <button onClick={handleAdd}>Adicionar na Pilha</button>
      <button onClick={handleRemove}>Remover do Topo</button>

      {/* Mostrando a pilha na tela */}
      <ul>
        {pilha.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
