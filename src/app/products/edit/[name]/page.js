import React from "react";

const EditProduct = async ({ params }) => {
  const name = (await params).name;
  return <div>Ürün: {name}</div>;
};

export default EditProduct;
