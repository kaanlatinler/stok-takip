import React from "react";

const RecentOrdersTable = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-12">
        <div className="card">
          <div className="card-header">Siparişler</div>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
