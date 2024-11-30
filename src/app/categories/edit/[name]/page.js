import React from "react";

const EditCategory = async ({ params }) => {
  const name = (await params).name;
  return <div>Kategori: {name}</div>;
};

export default EditCategory;
