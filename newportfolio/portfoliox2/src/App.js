import React, { useState } from "react";
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Add from "./components/Add";

function App() {

  const [mode, setMode] = useState("light")

const darkTheme = createTheme ({

palette:{
  mode: mode
}
})

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;















  // const BlueButton = styled(Button)({
  //   backgroundColor: "skyblue",
  //   color: "red",
  //   margin: 5,
  //   "&:hover": {
  //     backgroundColor: "black",
  //   },
  //   "&:disabled": {
  //     backgroundColor: "green",
  //     color: "white",
  //   },
  // });