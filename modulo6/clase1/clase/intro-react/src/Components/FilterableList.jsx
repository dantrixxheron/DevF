import { useEffect, useMemo, useState } from "react";

export default function FilterableList() {
  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const data = [
          { name: "Daniela", lastname: "Gonzalez", id: 1 },
          { name: "Juan", lastname: "Perez", id: 2 },
          { name: "Maria", lastname: "Lopez", id: 3 },
          { name: "Jose", lastname: "Martinez", id: 4 },
          { name: "Ana", lastname: "Garcia", id: 5 },
        ];
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => console.log("Desmontando componente");
  }, []);
  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.lastname.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [items, searchInput]);
  return (
    <div>
      <h1>Lista Filtrable de Nombres</h1>
      <input
        type="text"
        placeholder="Buscar por nombre o apellido"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} {item.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}
