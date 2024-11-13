import React from "react";
import CategoryDrop from "../Component/CategoryDrop"

const DescriptionForm = () => (
  <form className="w-72">
    <label className="block mb-2">Product Name *</label>
    <input type="text" className="border p-2 mb-4 w-full" />
    
    <CategoryDrop />

    <label className="block mb-2">Brand *</label>
    <input className="border p-2 mb-4 w-full" />
    
    <input
              type="file"
              id="image"
              name="image"
              accept="image/*,application/pdf"
              
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
  </form>
);

export default DescriptionForm;
