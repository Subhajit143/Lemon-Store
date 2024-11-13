import React, { useState } from "react";

const PriceInfoForm = () => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  return (
    <form className="p-4  rounded-md">
      <h2 className="text-lg font-semibold mb-4">Price Info</h2>
      
      {/* Price Input */}
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium mb-1">
          Price
        </label>
        <input
          type="number"
          id="price"
          placeholder="Enter price"
          value={price}
          onChange={handlePriceChange}
          className="w-full p-2 border rounded"
          min="0"
        />
      </div>
      
      {/* Discount Input */}
      <div>
        <label htmlFor="discount" className="block text-sm font-medium mb-1">
          Discount (%)
        </label>
        <input
          type="number"
          id="discount"
          placeholder="Enter discount percentage"
          value={discount}
          onChange={handleDiscountChange}
          className="w-full p-2 border rounded"
          min="0"
          max="100"
        />
      </div>
    </form>
  );
};

export default PriceInfoForm;
