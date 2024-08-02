import { Box } from "@mui/material";
import styles from "@/app/page.module.css";
import { Bolt, Flight } from "@mui/icons-material";
import productImage from "@/data/new-balance-530-white-silver-navy-1.jpg";
import Image from "next/image";
import SecondaryTag from "@/components/SecondaryTag";

export default function ProductImage() {
  return (
    <>
        <Box display="flex" alignItems="center">
          <SecondaryTag
            icon={<Bolt fontSize="small" color="success" />}
            text="Ready to Ship"
          />
          <SecondaryTag icon={<Flight fontSize="small" />} text="Pre-Order" />
        </Box>
        <Image
          src={productImage}
          alt="Product Image"
          className={styles["product-image"]}
        />
    </>
  );
}
