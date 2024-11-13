import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal"; // Use "Modal" instead of "Model" for consistency
import { IoClose } from "react-icons/io5";
import "./product.css"
import Shoes1 from "../assets/shoes1.jpg"
import Shoes2 from "../assets/shoes2.jpg"
import TShirt1 from "../assets/Tshirt1.jpg"
import TShirt2 from "../assets/Tshirts2.jpg"
import Shoes3 from "../assets/shoes3.jpg"
import Pants1 from "../assets/pants.png"
import Pants2 from "../assets/pants2.jpg"
import Shirt  from "../assets/Tshirt1.jpg"



const Products = () => {
  const [selected, setSelected] = useState(null);
  const [itemis, setItemis] = useState(categ);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const groupedItems = itemis.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleButton = (item) => {
    setSelected(item);
    setModalIsOpen(true);
  };

  return (
    <>
      <div>
        <div className="flex justify-between">
          <NavLink
            to="/Product"
            className="px-6 text-3xl font-semibold"
            onClick={() => handleButton(null)}
          >
            Products
          </NavLink>
          <div className="flex px-4 gap-16">
            <button
              className={`bg-gray-200 text-sky-600 px-5 py-2 rounded-lg font-medium ${
                selected === "Add-category"
                  ? "text-white bg-sky-600"
                  : "hover:text-white hover:bg-sky-600"
              }`}
              onClick={() => handleButton("Add-category")}
            >
              Add Category
            </button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              shouldCloseOnOverlayClick={true}
              className="modal-content"
              overlayClassName="modal-overlay"
            >
              <div className="relative p-4">
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setModalIsOpen(false)}
                >
                  <IoClose size={20} />
                </button>
                <h1 className="text-xl font-semibold mb-4">Add Category</h1>
                <input
                  type="text"
                  placeholder="Category Name"
                  className="w-full p-2 border rounded mb-4"
                />
                <button
                  className="w-full font-semibold text-white bg-sky-600 py-2 rounded-lg"
                  onClick={() => setModalIsOpen(false)}
                >
                  Submit
                </button>
              </div>
            </Modal>
            <NavLink to="/Add-Product">
            <button
              className={`bg-gray-200 text-sky-600 px-5 py-2 rounded-lg font-medium ${
                selected === "Add-product"
                  ? "text-white bg-sky-600"
                  : "hover:text-white hover:bg-sky-600"
              }`} 
            >
              Add Product
            </button>
            </NavLink>
           
          </div>
        </div>

        {/* Table to display items */}
        <div className="mt-4 flex gap-8 p-4">
          {itemis && itemis.length > 0 ? (
            Object.keys(groupedItems).map((prod, index) => (
              <div
                key={index}
                className="container rounded-lg bg-gray-100 w-1/5 h-[80vh]"
              >
                <h2 className="text-base font-semibold text-gray-700 p-3 mb-2">
                  {prod}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {groupedItems[prod].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 w-48 bg-white m-2 rounded-lg"
                    >
                      <div className="flex items-center px-2 gap-2 ">
                        {/* Display the image as a small box */}
                        <img
                          src={item.image}
                          className="w-18 h-12 object-cover rounded-lg mr-2 shadow-xl"
                          alt=""
                        />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs">{item.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center px-6 py-4 text-sm">
                No products found.
              </td>
            </tr>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

const categ = [
  {
    category: "T-Shirt",
    name: "Subha",
    price: "$99",
    image: TShirt1,
  },
  { category: "Shoes", name: "Hote", price: "$89", image: Shoes1 },
  { category: "Pants", name: "Rij", price: "$79", image: Pants1 },
  { category: "Shoes", name: "Rij 23", price: "$69", image: Shoes2 },
  { category: "T-Shirt", name: "fds", price: "$59", image: TShirt2 },
  { category: "Shoes", name: "pou", price: "$99", image: Shoes3 },
  { category: "Pants", name: "Digha", price: "$199", image: Pants2 },
  { category: "Shirt", name: "Digha", price: "$199", image: Shirt },
];
