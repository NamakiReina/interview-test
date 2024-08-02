import { Bolt, InfoOutlined, Inventory2Outlined } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import styles from "@/app/page.module.css";

export default function ProductShipping() {
  return (
    <div className={styles["product-shipping"]}>
      <Box display="flex" alignItems="center">
        <Typography fontSize="larger" margin="0 0.75rem 0 0">
          Shipping Method
        </Typography>
        <Tooltip title="Shipping method for the product" arrow color="gray">
          <InfoOutlined className={styles["info-icon"]} />
        </Tooltip>
      </Box>
      <Box display="flex" alignItems="center" margin="2rem 0">
        <Bolt
          className={styles["shipping-icon"]}
          color="success"
          fontSize="small"
        />
        <Box>
          <Typography fontSize="large">Same day delivery</Typography>
          <Typography variant="body2" color="gray">
            Messenger livery on scheduled date & time (fee based on distance)
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" margin="2rem 0">
        <Inventory2Outlined
          className={styles["shipping-icon"]}
          color="success"
          fontSize="small"
        />
        <Box>
          <Typography fontSize="large">Standard delivery</Typography>
          <Typography variant="body2" color="gray">
            Ship via provided delivery service after authentication (3-5 days)
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
