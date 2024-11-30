"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { id: "/", title: "Dashboard", icon: "zmdi zmdi-view-dashboard" },
  { id: "/categories", title: "Kategoriler", icon: "zmdi zmdi-invert-colors" },
  { id: "/products", title: "Ürünler", icon: "zmdi zmdi-format-list-bulleted" },
  { id: "/orders", title: "Siparişler", icon: "zmdi zmdi-grid" },
];

const SideBar = () => {
  const pathName = usePathname();

  return (
    <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
      <div className="brand-logo">
        <Link href="/">
          <img
            src="../assets/images/logo-icon.png"
            className="logo-icon"
            alt="logo icon"
          />
          <h5 className="logo-text">Dashtreme Admin</h5>
        </Link>
      </div>
      <ul className="sidebar-menu do-nicescrol">
        <li className="sidebar-header">MAIN NAVIGATION</li>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={
              (item.id === "/" && pathName === "/") ||
              (item.id !== "/" &&
                (pathName === item.id || pathName.startsWith(`${item.id}/`)))
                ? "active"
                : ""
            }
          >
            <a href={item.id}>
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
