import { Box } from "@mui/material";
import styles from "@/app/page.module.css";
import { Bolt, Flight } from "@mui/icons-material";
import Image from "next/image";
import SecondaryTag from "@/components/SecondaryTag";

export default function ProductImage(props: {
  tags: string[];
  imgUrl: string;
}) {
  const hasReadyToShip = props.tags.includes("ready-to-ship");
  const hasPreOrder = props.tags.includes("pre-order");

  return (
    <Box margin="0 0 1rem">
      <Box display="flex" alignItems="center">
        {hasReadyToShip && (
          <SecondaryTag
            icon={<Bolt fontSize="small" color="success" />}
            text="Ready to Ship"
          />
        )}
        {hasPreOrder && (
          <SecondaryTag icon={<Flight fontSize="small" />} text="Pre-Order" />
        )}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <Image
          src={`/data/${props.imgUrl}`}
          alt="Product Image"
          className={styles["product-image"]}
          // trying to find a way to make it center
          width={1000}
          height={1000}
        />
      </Box>
    </Box>
  );
}
