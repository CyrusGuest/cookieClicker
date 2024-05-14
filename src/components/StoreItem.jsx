import React from "react";

function StoreItem({ item, onPurchase }) {
  return (
    <div className="store-item border-2 border-black p-4 m-4">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p>{item.description}</p>
      <p>Cost: {item.cost} cookies</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onPurchase(item)}
        disabled={item.isPurchased}
      >
        {item.isPurchased ? "Purchased" : "Buy"}
      </button>
    </div>
  );
}

export default StoreItem;
