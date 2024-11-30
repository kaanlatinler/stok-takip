"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

const ProductTable = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

  const onEditButtonClick = (e, item) => {
    router.push(`/products/edit/${item.name}`);
  };

  const onDeleteButtonClick = (e, item) => {
    alert("Delete button clicked => " + item.name);
  };
  return (
    <div className="row">
      <div className="col-12 col-lg-12">
        <div className="card">
          <div className="card-header">Ürünler</div>
          <div className="table-responsive">
            <table className="table align-items-center table-flush table-borderless">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Photo</th>
                  <th>Product ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Shipping</th>
                  <th className="text-center">Sil</th>
                  <th className="text-center">Düzenle</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "#9405822", name: "Iphone 5", price: "$ 1250.00" },
                  { id: "#9405820", name: "Earphone GL", price: "$ 1500.00" },
                  {
                    id: "#9405830",
                    name: "HD Hand Camera",
                    price: "$ 1400.00",
                  },
                  {
                    id: "#9405825",
                    name: "Clasic Shoes",
                    price: "$ 1200.00",
                  },
                  { id: "#9405840", name: "Hand Watch", price: "$ 1800.00" },
                ].map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>{item.id}</td>
                    <td>{item.price}</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 90 }}
                        ></div>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        id="asd"
                        type="button"
                        className="btn btn-danger p-2"
                        style={{ transition: "transform 0.2s" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        onClick={(e) => onDeleteButtonClick(e, item)}
                      >
                        <MdDeleteForever size={30} />
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-warning p-2"
                        style={{ transition: "transform 0.2s" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        onClick={(e) => onEditButtonClick(e, item)}
                      >
                        <MdEditSquare size={30} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
