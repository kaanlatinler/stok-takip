import React from "react";

const IncomeExpenseChart = ({ Income, Expense }) => {
  return (
    <div className="col-12 col-lg-8 col-xl-8">
      <div className="card">
        <div className="card-header">Gelen / Giden Ürün Grafiği</div>
        <div className="card-body">
          <ul className="list-inline">
            <li className="list-inline-item">
              <i className="fa fa-circle mr-2 text-white"></i>Gelen
            </li>
            <li className="list-inline-item">
              <i className="fa fa-circle mr-2 text-light"></i>Giden
            </li>
          </ul>
          <div className="chart-container-1">
            <canvas id="chart1"></canvas>
          </div>
        </div>

        <div className="row m-0 row-group text-center border-top border-light-3">
          <div className="col-12 col-lg-6">
            <div className="p-3">
              <h5 className="mb-0">45.87M</h5>
              <small className="mb-0">
                Gelen{" "}
                <span>
                  {" "}
                  <i className="fa fa-arrow-up"></i> 2.43%
                </span>
              </small>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="p-3">
              <h5 className="mb-0">15:48</h5>
              <small className="mb-0">
                Giden{" "}
                <span>
                  {" "}
                  <i className="fa fa-arrow-up"></i> 12.65%
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
