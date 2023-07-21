import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import LoginModal from "../modal/modal"
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./Navbar.css";


export default function Navbar() {
  const [open, setOpen] = useState(false)


  const showLogin = () => {
    setOpen(true)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Anime
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Homepage
          </Typography>
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Button color="inherit" onClick={showLogin}><PersonIcon /></Button>
        </Toolbar>
      </AppBar>
      <LoginModal open={open} setOpen={setOpen} />
    </Box>
  );
}