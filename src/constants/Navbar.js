import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./constant.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="flex flex-row justify-between fixed z-20 top-0 left-0 right-0 md:px-[140px] sm:px-[90px] px-[50px] py-[30px]">
      <img
        src={logo}
        alt="Logo"
        className="w-[80px] sm:w-[110px] object-contain "
      />
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-row items-center gap-2">
          <SmartphoneOutlinedIcon fontSize="small" />
          <p>07723111477</p>
        </div>
        <MenuIcon onClick={handleMenuToggle} fontSize="large" />
      </div>
      {toggleMenu && (
        <div className="smallScreenMenus">
          <Link className="menuItemSmall" onClick={handleMenuToggle} to="/">
            HOME
          </Link>
          <Link className="menuItemSmall" onClick={handleMenuToggle} to="/gallery">
            GALLARY
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
