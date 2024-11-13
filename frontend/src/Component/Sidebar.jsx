import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import { TbBrandGoogleHome, TbCategoryMinus, TbProgressHelp } from "react-icons/tb";
import { GrCatalog } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { SiMaterialformkdocs } from "react-icons/si";
import { TbSettingsBolt } from "react-icons/tb";


const Sidebar = () => {
  // State to keep track of the currently selected item
  const [selected, setSelected] = useState("");

  const handleSelect = (item) => {
    setSelected(item); // Update the selected item
  };

  return (
    <div className='h-screen w-64 sticky p-4 border shadow-xl flex flex-col justify-between gap-6'>
      <div className='flex flex-col gap-12'>
        
        {/* Logo Section */}
        <div>
          <NavLink to="/" onClick={() => handleSelect("Home")}>
            <img src={Logo} alt="Logo" className='w-24' />
            <div className="border-b border-gray-600 mt-2 py-2"></div>
          </NavLink>
        </div>

        {/* Navigation Items */}
        <div>
          <ul className='flex flex-col gap-3'>
            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "Home" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("Home")}
            >
              <NavLink to="/" className="flex gap-2 items-center">
                <TbBrandGoogleHome className='text-lg' />
                <span className="text-base font-medium">Home</span>
              </NavLink>
            </li>
            
            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "Products" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("Products")}
            >
              <NavLink to="/Product" className="flex gap-2 items-center">
                <TbCategoryMinus className='text-lg' />
                <span className="text-base font-medium">Products</span>
              </NavLink>
            </li>
            
            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "About" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("About")}
            >
              <NavLink to="/about" className="flex gap-2 items-center">
                <TbProgressHelp className='text-lg' />
                <span className="text-base font-medium">About</span>
              </NavLink>
            </li>

            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "About" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("About")}
            >
              <NavLink to="/about" className="flex gap-2 items-center">
                <GrCatalog  className='text-lg' />
                <span className="text-base font-medium">Catalogue</span>
              </NavLink>
            </li>

            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "About" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("About")}
            >
              <NavLink to="/about" className="flex gap-2 items-center">
                <FaProjectDiagram   className='text-lg' />
                <span className="text-base font-medium">Promotion</span>
              </NavLink>
            </li>

            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "About" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("About")}
            >
              <NavLink to="/about" className="flex gap-2 items-center">
                <TbReportSearch   className='text-lg' />
                <span className="text-base font-medium">Reports</span>
              </NavLink>
            </li>

            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "About" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("About")}
            >
              <NavLink to="/about" className="flex gap-2 items-center">
                <SiMaterialformkdocs    className='text-lg' />
                <span className="text-base font-medium">Docs</span>
              </NavLink>
            </li>

            <li
              className={`py-2 px-4 rounded cursor-pointer ${
                selected === "About" ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
              }`}
              onClick={() => handleSelect("About")}
            >
              <NavLink to="/about" className="flex gap-2 items-center">
                <TbSettingsBolt    className='text-lg' />
                <span className="text-base font-medium">Settings</span>
              </NavLink>
            </li>



          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className='p-2'>
        <h1 className='text-lg'>Subhajit Majumdar</h1>
        <p className='text-sm'>subhajitmajumder147@gmail.com</p>
      </div>
    </div>
  );
};

export default Sidebar;
