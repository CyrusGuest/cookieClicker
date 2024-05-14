import React from "react";

function InventoryItem({ item }) {
  return (
    <div className="inventory-item border-2 border-black p-4 m-4">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p>{item.description}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default InventoryItem;
