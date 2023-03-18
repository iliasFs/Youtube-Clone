import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from '../utils/logo.png'

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center",maxWidth:'120px' }}>
      <img src={logo} alt="logo" className="nav-logo"/>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
