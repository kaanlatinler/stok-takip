"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import StatisticCards from "@/components/home/StatisticCards";
import ProductTable from "@/components/products/ProductTable";
import { useRouter } from "next/navigation";
import React from "react";

const Products = () => {
  const router = useRouter();

  const onAddButtonClick = () => {
    router.push("/products/add");
  };
  return (
    <div id="wrapper">
      <SideBar />
      <Header />
      <div className="clearfix"></div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <StatisticCards />
          <button onClick={onAddButtonClick} className="btn btn-info mb-4">
            Ürün Ekle
          </button>
          <ProductTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;