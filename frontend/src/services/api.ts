export async function addItem(item: string, route: string) {
  const API_URL: string =
    import.meta.env.VITE_API_URL || "http://localhost:3001/api";

  try {
    const response = await fetch(API_URL + "/" + route, {
      method: "POST",
      body: JSON.stringify({ item }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Item adicionado!");
    }
    return data;
  } catch (error) {
    console.error("Erro ao adicionar:", error);
  }
}

export async function getItems(route: string) {
  const API_URL: string =
    import.meta.env.VITE_API_URL || "http://localhost:3001/api";

  try {
    const response = await fetch(API_URL + "/" + route);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar:", error);
  }
}

export async function removeItem(route: string, index?: number) {
  const API_URL = "http://localhost:3001/api";
    const url = index !== undefined ? `${API_URL}/${route}/${index}` : `${API_URL}/${route}`;

  try {
    const response = await fetch(url, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar:", error);
  }

}

export async function getStats() {
  const API_URL: string =
    import.meta.env.VITE_API_URL || "http://localhost:3001/api";

  try {
    const response = await fetch(`${API_URL}/estatisticas`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar:", error);
  }
}
