import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar/>
          <Typography variant="h1">Projects</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}