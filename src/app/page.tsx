import { Box, Grid } from "@mui/material";
import styles from "./page.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className={styles.page}>
      <Breadcrumb />
      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} md={6} className={styles["product-container"]}>
              <ProductImage />
            </Grid>
            <Grid item xs={12} md={6} className={styles["product-container"]}>
              <ProductInfo />
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
