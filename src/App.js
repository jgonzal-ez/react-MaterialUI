import { Button, Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
