import React, { useState } from "react";

const CombinationForm = () => {
  const initialCombinations = [
    { sizeColor: "M/Black", sku: "", inStock: false, quantity: 0 },
    { sizeColor: "M/Red", sku: "", inStock: false, quantity: 0 },
    { sizeColor: "L/Black", sku: "", inStock: false, quantity: 0 },
    { sizeColor: "L/Red", sku: "", inStock: false, quantity: 0 },
  ];

  const [combinations, setCombinations] = useState(initialCombinations);

  const handleSKUChange = (index, value) => {
    const updatedCombinations = combinations.map((comb, i) =>
      i === index ? { ...comb, sku: value } : comb
    );
    setCombinations(updatedCombinations);
  };

  const handleInStockToggle = (index) => {
    const updatedCombinations = combinations.map((comb, i) =>
      i === index
        ? { ...comb, inStock: !comb.inStock, quantity: comb.inStock ? 0 : comb.quantity }
        : comb
    );
    setCombinations(updatedCombinations);
  };

  const handleQuantityChange = (index, value) => {
    const updatedCombinations = combinations.map((comb, i) =>
      i === index ? { ...comb, quantity: value } : comb
    );
    setCombinations(updatedCombinations);
  };

  return (
    <form>
      <h2 className="text-lg font-semibold mb-4">Combinations</h2>

      {/* Headers */}
      <div className="grid grid-cols-4 gap-2 font-semibold mb-2">
        <div>Size/Color</div>
        <div>SKU</div>
        <div>In-Stock</div>
        <div>Quantity</div>
      </div>

      {/* Combinations List */}
      {combinations.map((combination, index) => (
        <div key={index} className="grid grid-cols-4 gap-2 items-center mb-2">
          {/* Size/Color Label */}
          <div>{combination.sizeColor}</div>

          {/* SKU Input */}
          <input
            type="text"
            placeholder="SKU"
            value={combination.sku}
            onChange={(e) => handleSKUChange(index, e.target.value)}
            className="border p-2 rounded"
          />

          {/* In-Stock Toggle */}
          <button
            type="button"
            onClick={() => handleInStockToggle(index)}
            className={`px-4 py-1 rounded ${combination.inStock ? "bg-green-500 text-white" : "bg-gray-300"}`}
          >
            {combination.inStock ? "Yes" : "No"}
          </button>

          {/* Quantity Input, enabled only if in-stock is true */}
          <input
            type="number"
            placeholder="Quantity"
            value={combination.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
            className="border p-2 rounded"
            disabled={!combination.inStock}
            min="0"
          />
        </div>
      ))}
    </form>
  );
};

export default CombinationForm;
