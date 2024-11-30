"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    category: "",
    productPic: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Dosya seçimi için özel kontrol
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data: ", formData);
    // Backend'e formData'yı gönderme işlemi burada yapılabilir
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
                  <div className="card-title">Ürün Ekle</div>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    {/* Ürün Adı */}
                    <div className="form-group">
                      <label htmlFor="product-name">Ürün Adı</label>
                      <input
                        type="text"
                        className="form-control"
                        id="product-name"
                        name="productName"
                        placeholder="Ürün adını giriniz"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    {/* Fiyat */}
                    <div className="form-group">
                      <label htmlFor="price">Fiyat</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Ürün fiyatını giriniz"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    {/* Kategori */}
                    <div className="form-group">
                      <label htmlFor="category">Kategori</label>
                      <select
                        className="form-control"
                        id="category"
                        name="category"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Kategori seçiniz</option>
                        <option value="electronics">Elektronik</option>
                        <option value="clothing">Giyim</option>
                        <option value="home">Ev ve Yaşam</option>
                      </select>
                    </div>

                    {/* Ürün Resmi */}
                    <div className="form-group">
                      <label htmlFor="product-pic">Ürün Resmi</label>
                      <input
                        type="file"
                        className="form-control"
                        id="product-pic"
                        name="productPic"
                        required
                        onChange={handleChange}
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
                        onClick={() => router.push("/products")}
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
                        <i className="icon-plus"></i> Ürün Ekle
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

export default AddProduct;
