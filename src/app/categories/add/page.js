"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    categoryPic: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="wrapper">
      <SideBar />
      <Header />
      <div className="clearfix"></div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Kategori Ekle</div>
                  <hr />
                  <form onSubmit={(e) => handleSubmit(e)}>
                    {/* Kategori Adı */}
                    <div className="form-group">
                      <label htmlFor="category-name">Kategori Adı</label>
                      <input
                        type="text"
                        className="form-control"
                        id="category-name"
                        name="categoryName"
                        placeholder="Kategori adını giriniz"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="category-pic">Kategori Resmi</label>
                      <input
                        type="file"
                        className="form-control "
                        id="category-pic"
                        name="categoryPic"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    {/* Submit Butonu */}
                    <div className="form-group d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-danger px-5"
                        style={{ transition: "transform 0.2s" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        onClick={(e) => router.push("/categories")}
                      >
                        <i className="icon-arrow-left-circle"></i> Geri Dön
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success px-5"
                        style={{ transition: "transform 0.2s" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i className="icon-plus"></i> Kategori Ekle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddCategory;
