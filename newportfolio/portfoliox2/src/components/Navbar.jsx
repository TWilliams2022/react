import { AppBar, Avatar, Badge, Box, List, ListItem, ListItemButton, ListItemIcon, Menu, MenuItem, styled, Switch, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { InputBase } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

//add props of mode and set mode because the dark mode toggle is here 
const Navbar = ({mode, setMode}) => {

  const [open, setOpen] = useState(false);

const Search = styled ("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: "0 10px",
  borderRadius: "5px",
  width: "30%"
}));
const Icons = styled(Box)(({ theme }) => ({
  display:"flex",
  gap: "15px"
}));

  //replace toolbar with styled toolbar
const StyledToolBar = styled(Toolbar) ({

  display: "flex",
  justifyContent: "space-between"
})

  return (
    <AppBar position="sticky">
      {/* <Toolbar> */}
      <StyledToolBar>
        <h3
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Will's Place
        </h3>
        <Search>
          <InputBase placeholder="Search....." />
        </Search>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Darkmode">
              <ListItemIcon>
                <WbSunnyOutlinedIcon
                  onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
                  sx={{ width: "30px" }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>

        <Icons>
          <Badge>
            <Avatar
              sx={{
                width: 30,
                height: 30,
              }}
              alt="Tyreik Williams"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBe4kaUGEmSNTRshdRdkvlJMWrcQfIfYMzA&usqp=CAU"
              onClick={(e) => setOpen(true)}
            />
          </Badge>
        </Icons>
      </StyledToolBar>
      {/* </Toolbar> */}

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        //changed true to open.. open witll depend on the state of open
        // open={true}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar