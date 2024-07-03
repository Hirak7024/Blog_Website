import { Avatar, Grid, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../State/Auth/Action";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const auth = useSelector(store => store.auth);
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }
  }, [jwt, auth.jwt])

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  }

  return (
    <Grid
      container
      bgcolor={"rgba(0,0,0,0.5)"}
      color={"white"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.8rem 4rem 0.8rem 2rem",
        position: "fixed",
        top: "0px",
        left: "0px",
        zIndex: "100"
      }}
    >
      <Grid item>
        <h1 className="cursor-pointer text-[22px] font-semibold" onClick={() => navigate("/")}>MyBlog</h1>
      </Grid>
      <Grid item>
        <ul className="flex gap-[1.5rem] items-center">
          <li className="cursor-pointer text-[15px]" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer text-[15px" onClick={() => navigate("/allBlogs")}>Blogs</li>
          <li>
            {auth?.user?.name ? (
              <div>
                <Avatar
                  className="text-white"
                  onClick={handleUserClick}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{
                    bgcolor: "royalblue",
                    color: "white",
                    cursor: "pointer",
                    width: "2.2rem",
                    height: "2.2rem",
                  }}
                >
                  {auth?.user?.name[0]?.toUpperCase()}
                </Avatar>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openUserMenu}
                  onClose={handleCloseUserMenu}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => { navigate("/createBlog"); handleCloseUserMenu() }}>Write</MenuItem>
                  <MenuItem onClick={() => { navigate("/userblogs"); handleCloseUserMenu(); }} >My Blogs</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <h1 onClick={() => navigate("/login")} className="cursor-pointer text-[15px]">Sign In</h1>
            )}
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
