import React from "react";
import Navbar from "../molecules/Navbar.molecules";
import ProductForm from "../organism/ProductForm.organism";
import CreateProductTitle from "../molecules/CreateProductTitle.molecules";
import { useEffect } from "react";

const CreateProduct = () => {
  useEffect(() => {
    alert("Welcome");
  });

  return (
    <div>
      <Navbar />
      <CreateProductTitle />
      <ProductForm />
    </div>
  );
};

export default CreateProduct;
