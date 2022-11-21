import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CustomizedStepper from "./Stepper";
//import { trackingQueryResultStore } from '../src/dataStore';
import { Order } from ".prisma/client";
import { useClientSideStore } from "../src/orderStore";

const DisplayOrderResults = () => {
  const data = useClientSideStore((state) => state.order as Order);
  return (
    <Paper
      square
      sx={{ backgroundColor: "paper", p: 1, height: 320, boxShadow: 12 }}
    >
      <Typography sx={{ fontSize: 15, fontWeight: "bold", pb: 1 }}>
        My Orders/Tracking{" "}
      </Typography>
      <Divider />
      <Container maxWidth="lg" sx={{ border: "1px solid lightgray", mt: 5 }}>
        <Grid container spacing={2} alignItems="center" sx={{ py: 1 }}>
          <Grid item xs={3}>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              Tracking #:
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "lightslategray" }}>
              {data.awb}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              Shipping To:
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "lightslategray" }}>
              {data.name}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              Estimated Delivery Time:
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "lightslategray" }}>
              {data.createdAt}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              Status:
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "lightslategray" }}>
              {data.status}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ mt: 4, mx: 1, mb: 2 }}>
        {data ? <CustomizedStepper status={data.status} /> : null}
      </Box>

      <Divider />
    </Paper>
  );
};

export default DisplayOrderResults;
