"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import CategoryTable from "@/components/categories/CategoryTable";
import StatisticCards from "@/components/home/StatisticCards";
import { useRouter } from "next/navigation";
import React from "react";

const Categories = () => {
  const router = useRouter();

  const onAddButtonClick = () => {
    router.push("/categories/add");
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
            Kategori Ekle
          </button>
          <CategoryTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
