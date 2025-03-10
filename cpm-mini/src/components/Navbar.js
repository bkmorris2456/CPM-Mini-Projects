import * as React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {

    const commonNavbarStyles = {
        borderRadius: "24px",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        display: "flex",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <Box
            sx={{
                ...commonNavbarStyles,
                display: "flex",
            }}
        >
            <AppBar position="static">
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Box sx={{display: "flex", gap: 2}}>
                        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                            Home
                        </Typography>
                        <Typography variant="h6" component={Link} to="/projects" sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                            Projects
                        </Typography>
                        <Typography variant="h6" component={Link} to="/about" sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                            About
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )

}