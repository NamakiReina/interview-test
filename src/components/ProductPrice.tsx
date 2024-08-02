import { Grid, Typography } from "@mui/material";
import styles from "@/app/page.module.css";

export default function ProductPrice(props: {
  startingFrom: number;
  highestBid: number;
  lastSale: number;
}) {
  return (
    <Grid container className={styles["product-price"]}>
      <Grid item xs={4} textAlign="center">
        <Typography color="#b7b7b7" variant="body2" gutterBottom>
          Starting from
        </Typography>
        <Typography fontSize="large">฿ {props.startingFrom.toLocaleString()}</Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Typography color="#b7b7b7" variant="body2" gutterBottom>
          Highest bid
        </Typography>
        <Typography fontSize="large">฿ {props.highestBid.toLocaleString()}</Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Typography color="#b7b7b7" variant="body2" gutterBottom>
          Last sale
        </Typography>
        <Typography fontSize="large">฿ {props.lastSale.toLocaleString()}</Typography>
      </Grid>
    </Grid>
  );
}
