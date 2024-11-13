import React, { useState } from "react";
import DescriptionForm from "./DescriptionForm"
import VariantsForm from "./VariantsForm"
import { NavLink } from "react-router-dom";
import CombinationForm from "./CombinationForm";
import PriceInfoForm from "./PriceInfoForm";


const AddProduct = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("Description");

  // Define the sections
  const sections = ["Description", "Variants", "Combination", "PriceInfo"];

  // Function to render the form for each section
  const renderSectionForm = () => {
    switch (activeSection) {
      case "Description":
        return <DescriptionForm />;
      case "Variants":
        return <VariantsForm />;
      case "Combination":
        return <CombinationForm />;
      case "PriceInfo":
        return <PriceInfoForm />;
      default:
        return <DescriptionForm />;
    }
  };

  return (
    <div>
      {/* Navigation tabs */}
      <div className="flex flex-col gap-4  mb-4">
      <NavLink
            to="/Add-Product"
            className="px-6 text-3xl font-semibold"
            
          >
            Add-Products
          </NavLink>
       <div>
       {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`py-2 px-4 ${
              activeSection === section ? "border-b-2 border-blue-500 font-semibold" : ""
            }`}
          >
            {section} <span className="p-3">></span>
          </button>
        ))}
       </div>
      </div>

      {/* Section content */}
      <div className="p-4 border w-max rounded-lg">
        {renderSectionForm()}
      </div>
    </div>
  );
};

export default AddProduct;
