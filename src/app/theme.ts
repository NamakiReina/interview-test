"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b1b1b",
      contrastText: "#fff",
    },
    success: {
      main: "#00b900",
      contrastText: "#fff",
    },
  },
});

export default theme;
