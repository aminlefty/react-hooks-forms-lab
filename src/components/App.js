import { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import { v4 as uuid } from "uuid";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [search, setSearch] = useState("");

  // Add new item
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Filter items by search text
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={setSearch} />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
