import { Box, Grid } from "@mui/material";
import styles from "./page.module.css";
import Breadcrumb from "@/components/Breadcrumb";
import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";
import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "public/data/MR530SG.json");
  const product = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <div className={styles.page}>
      <Breadcrumb
        category={product.category}
        brand={product.brand}
        name={product.name}
      />
      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} md={6} className={styles["product-container"]}>
              <ProductImage
                tags={product.market.type}
                imgUrl={product.img_url}
              />
            </Grid>
            <Grid item xs={12} md={6} className={styles["product-container"]}>
              <ProductInfo
                name={product.name}
                brand={product.brand}
                sku={product.sku}
                startingFrom={product.market.lowest_ask}
                highestBid={product.market.highest_bid}
                lastSale={product.market.last_sale}
              />
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
