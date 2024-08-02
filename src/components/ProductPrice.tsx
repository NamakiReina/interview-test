import { Grid, Typography } from "@mui/material";
import styles from "@/app/page.module.css";

export default function ProductPrice() {
  return (
    <Grid container className={styles["product-price"]}>
      <Grid item xs={4} textAlign="center">
        <Typography color="#b7b7b7" variant="body2" gutterBottom>
          Starting from
        </Typography>
        <Typography fontSize="large">฿ 3,900</Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Typography color="#b7b7b7" variant="body2" gutterBottom>
          Highest bid
        </Typography>
        <Typography fontSize="large">฿ 4,100</Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Typography color="#b7b7b7" variant="body2" gutterBottom>
          Last sale
        </Typography>
        <Typography fontSize="large">฿ 4,050</Typography>
      </Grid>
    </Grid>
  );
}
