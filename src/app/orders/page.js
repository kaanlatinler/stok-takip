import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import StatisticCards from "@/components/home/StatisticCards";
import OrderTable from "@/components/orders/OrderTable";
import React from "react";

const Orders = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <Header />
      <div className="clearfix"></div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <StatisticCards />
          <OrderTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
