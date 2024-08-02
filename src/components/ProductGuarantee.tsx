import { Grid, Typography } from "@mui/material";
import styles from "@/app/page.module.css";
import { VerifiedUserOutlined } from "@mui/icons-material";

export default function ProductGuarantee() {
  return (
    <Grid container color="gray" padding="1rem 0">
      <Grid
        item
        xs={6}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        display="flex"
        className={styles["product-guarantee"]}
      >
        <VerifiedUserOutlined />
        <Typography padding="0.5rem" variant="body2" fontSize="small">
          100% Authentic Guarantee
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        display="flex"
        className={styles["product-guarantee"]}
      >
        <VerifiedUserOutlined />
        <Typography padding="0.5rem" variant="body2" fontSize="small">
          Anti Fraudulent transaction
        </Typography>
      </Grid>
    </Grid>
  );
}
