import React from "react";
import Item from "./Item";

function ShoppingList({ items, search }) {
  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="Items">
      {itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
  );
}

export default ShoppingList;
