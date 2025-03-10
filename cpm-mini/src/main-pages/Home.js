import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar/>
          <Typography variant="h1">Homepage</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}