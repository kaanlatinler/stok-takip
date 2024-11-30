import React from "react";

const CategoriesChart = ({ categories }) => {
  return (
    <div className="col-12 col-lg-4 col-xl-4">
      <div className="card">
        <div className="card-header">Kategoriler</div>
        <div className="card-body">
          <div className="chart-container-2">
            <canvas id="chart2"></canvas>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table align-items-center">
            <tbody>
              <tr>
                <td>
                  <i className="fa fa-circle text-white mr-2"></i> Direct
                </td>
                <td>$5856</td>
                <td>+55%</td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-circle text-light-1 mr-2"></i>Affiliate
                </td>
                <td>$2602</td>
                <td>+25%</td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-circle text-light-2 mr-2"></i>E-mail
                </td>
                <td>$1802</td>
                <td>+15%</td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-circle text-light-3 mr-2"></i>Other
                </td>
                <td>$1105</td>
                <td>+5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesChart;
