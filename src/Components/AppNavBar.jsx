import React, { useState, useEffect } from "react";
import { UserButton } from "@clerk/clerk-react";

import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

const navLoggedIn = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "My Projects",
    link: "/projects",
  },
  {
    name: "Suggestions",
    link: "/suggestions",
  },
  {
    name: "Roadmap",
    link: "/roadmap",
  },
  {
    name: "Profile",
    link: "/profile",
  },
];

const navLoggedOut = [
  {
    name: "features",
    link: "#features",
  },
  {
    name: "UseCases",
    link: "#usecases",
  },
  {
    name: "pricing",
    link: "#pricing",
  },
  {
    name: "login",
    link: "/login",
  },
];

const AppNavBar = ({ loggedIn = true }) => {
  const [navLinks, setNavlinks] = useState([...navLoggedOut]);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [, setAnchorElUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      setNavlinks([...navLoggedIn]);
    } else {
      setNavlinks([...navLoggedOut]);
    }
    return () => {
      setNavlinks([...navLoggedOut]);
    };
  }, [loggedIn]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigateTo = (link) => {
    navigate(`${link}`);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="hidden md:flex"
            src={logo}
            alt="feedback-logo"
            style={{
              width: "75px",
              height: "60px",
              marginRight: "30px",
              objectFit: "cover",
              borderRadius: "5px",
              border: "1.5px solid purple",
            }}
            onClick={() => navigateTo("/")}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navLinks.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                >
                  <NavLink
                    to={page.link}
                    className={({ isActive }) =>
                      `relative pb-1 transition-all duration-200 ${
                        isActive
                          ? "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-purple-500 ff-nav-bar-links "
                          : "ff-nav-bar-links "
                      }`
                    }
                  >
                    {page.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="flex md:hidden  items-center h-16 w-full">
            <img
              src={logo}
              alt="feedback-logo"
              style={{
                width: "75px",
                height: "60px",
                marginRight: "30px",
                objectFit: "cover",
                borderRadius: "5px",
                border: "1.5px solid purple",
              }}
              onClick={() => navigateTo("/")}
            />
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map((page) => (
              <NavLink
                key={page.name}
                to={page.link}
                className={({ isActive }) =>
                  `relative pb-1 transition-all duration-200 ${
                    isActive
                      ? "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-purple-500 ff-nav-bar-links "
                      : "ff-nav-bar-links "
                  }`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {loggedIn ? (
              <UserButton />
            ) : (
              <button
                className="gradient-btn"
                onClick={() => navigateTo("/signup")}
              >
                Start Free
              </button>
            )}

            {/* --- User Profile Menu display */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppNavBar;
