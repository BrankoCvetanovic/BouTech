import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="title">BouTech</div>
        <IconButton
          sx={{
            "&:hover": {
              backgroundColor: "rgb(24, 23, 23)",
            },
            padding: "8px 15px",
            borderRadius: "3px",
            bgcolor: "rgb(48, 46, 46)",
            color: "white",
          }}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </div>
      <div className="nav">
        <NavLink className="home" to="/">
          <HomeOutlinedIcon fontSize="small" sx={{ height: "1.1rem" }} />
        </NavLink>
        <NavLink to="/appliances">Appliances</NavLink>
        <NavLink to="/tvs">TV</NavLink>
        <NavLink to="/it">IT</NavLink>
        <NavLink to="/phones">Phones</NavLink>
      </div>
    </div>
  );
}
