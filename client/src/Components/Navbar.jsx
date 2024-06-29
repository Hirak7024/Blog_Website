import { Avatar, Grid, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      xs={12}
      bgcolor={"rgba(0,0,0,0.5)"}
      color={"white"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        position:"absolute",
        top:"0px",
        left:"0px"
      }}
    >
      <Grid item>
        <h1 className="cursor-pointer text-[22px] font-semibold">MyBlog</h1>
      </Grid>
      <Grid item>
        <ul className="flex gap-[1.5rem] items-center">
          <li className="cursor-pointer text-[15px]">Home</li>
          <li className="cursor-pointer text-[15px">Blogs</li>
          <li>
            {isSignedIn ? (
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
                  }}
                >
                  H
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
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My Blogs</MenuItem>
                  <MenuItem
                  // onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <h1>Sign In</h1>
            )}
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
