import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
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
    name: "Settings",
    link: "/settings",
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
          <QuestionAnswerRoundedIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#ff00d4",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              letterSpacing: "0",
              textDecoration: "none",
            }}
          >
            <span
              className="text-xl logo-gradient"
              onClick={() => navigateTo("/")}
              style={{
                cursor: "pointer",
              }}
            >
              FeedbackBox
            </span>
          </Typography>

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
          <QuestionAnswerRoundedIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "#ff00d4",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <span className="text-xl logo-gradient">FeedbackBox</span>
          </Typography>
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
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
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
