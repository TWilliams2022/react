import React from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                <CottageOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Slots">
              <ListItemIcon>
                <CasinoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Slots" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Sports Bet">
              <ListItemIcon>
                <SportsFootballOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Sports" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Chat">
              <ListItemIcon>
                <ForumOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Cryto Wallet">
              <ListItemIcon>
                <CurrencyBitcoinOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Crypto Wallet" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Profile">
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
              <ListItemIcon>
                <SettingsSuggestOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar