"use client";

import React from "react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

const OrderTable = () => {
  const onEditButtonClick = (e) => {
    console.log("Edit button clicked");
  };

  const onDeleteButtonClick = (e) => {
    console.log("Delete button clicked");
  };
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card">
            <div className="card-header">Bekleyen Siparişler</div>
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
                  <tr>
                    <td>Iphone 5</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405822</td>
                    <td>$ 1250.00</td>
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
                        className="btn btn-danger p-2"
                        style={{ transition: "transform 0.2s" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        onClick={(e) => onDeleteButtonClick(e)}
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
                        onClick={(e) => onEditButtonClick(e)}
                      >
                        <MdEditSquare size={30} />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>Earphone GL</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405820</td>
                    <td>$ 1500.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 60 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>HD Hand Camera</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405830</td>
                    <td>$ 1400.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 70 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Clasic Shoes</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405825</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 100 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Hand Watch</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405840</td>
                    <td>$ 1800.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 40 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Clasic Shoes</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405825</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 100 }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card">
            <div className="card-header">Gelen Siparişler</div>
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
                  <tr>
                    <td>Iphone 5</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405822</td>
                    <td>$ 1250.00</td>
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
                  </tr>

                  <tr>
                    <td>Earphone GL</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405820</td>
                    <td>$ 1500.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 60 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>HD Hand Camera</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405830</td>
                    <td>$ 1400.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 70 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Clasic Shoes</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405825</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 100 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Hand Watch</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405840</td>
                    <td>$ 1800.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 40 }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Clasic Shoes</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/110x110"
                        className="product-img"
                        alt="product img"
                      />
                    </td>
                    <td>#9405825</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    <td>
                      <div className="progress shadow" style={{ height: 3 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: 100 }}
                        ></div>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger p-2"
                        style={{ transition: "transform 0.2s" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        onClick={(e) => onDeleteButtonClick(e)}
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
                        onClick={(e) => onEditButtonClick(e)}
                      >
                        <MdEditSquare size={30} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
