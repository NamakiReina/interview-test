import { Box, Button, Divider } from "@mui/material";
import styles from "@/app/page.module.css";
import ProductPrice from "./ProductPrice";
import ProductNameBrand from "./ProductNameBrand";
import ProductShipping from "./ProductShipping";
import ProductGuarantee from "./ProductGuarantee";

export default function ProductInfo() {
  return (
    <>
      <ProductNameBrand />
      <ProductPrice />
      <Divider variant="fullWidth" />
      <ProductShipping />
      <Divider variant="fullWidth" />
      <ProductGuarantee />
      <Box display="flex" width="100%" margin="2rem 0 1rem">
        <Button variant="contained" color="primary" className={styles.button}>
          Sell
        </Button>
        <Button variant="contained" color="success" className={styles.button}>
          Buy
        </Button>
      </Box>
    </>
  );
}
