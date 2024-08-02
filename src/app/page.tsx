"use client";

import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import styles from "./page.module.css";
import {
  Bolt,
  Flight,
  InfoOutlined,
  Inventory2Outlined,
  NotificationsNone,
  ShareOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import productImage from "@/data/new-balance-530-white-silver-navy-1.jpg";
import Image from "next/image";
import SecondaryTag from "@/components/SecondaryTag";

export default function Home() {
  return (
    <div className={styles.page}>
      <Box className={styles.breadcrumb}>
        <Breadcrumbs className={styles["breadcrumb-color"]} separator={">"}>
          <Link color="inherit" underline="none" href="/">
            Home
          </Link>
          <Link color="inherit" underline="none" href="/">
            Shoes
          </Link>
          <Link color="inherit" underline="none" href="/">
            New Balance
          </Link>
          <Link color="inherit" underline="none" href="/">
            New Balance 530 White Silver Navy
          </Link>
        </Breadcrumbs>
        <Box>
          <IconButton className={styles["breadcrumb-color"]}>
            <ShareOutlined />
          </IconButton>
          <IconButton className={styles["breadcrumb-color"]}>
            <NotificationsNone />
          </IconButton>
        </Box>
      </Box>

      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <SecondaryTag
                  icon={<Bolt fontSize="small" color="success" />}
                  text="Ready to Ship"
                />
                <SecondaryTag
                  icon={<Flight fontSize="small" />}
                  text="Pre-Order"
                />
              </Box>
              <Image
                src={productImage}
                alt="Product Image"
                className={styles["product-image"]}
              />
            </Grid>
            <Grid item xs={6}>
              <h2>New Balance 530 White Silver Navy</h2>
              <p>New Balance | MR530SG</p>
              <Grid container>
                <Grid item xs={4} textAlign="center">
                  <p>Starting from</p>
                  <p>฿ 3,900</p>
                </Grid>
                <Grid item xs={4} textAlign="center">
                  <p>Highest bid</p>
                  <p>฿ 4,100</p>
                </Grid>
                <Grid item xs={4} textAlign="center">
                  <p>Last sale</p>
                  <p>฿ 4,050</p>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" />
              <Box display="flex" alignItems="center">
                <h3>Shipping Method</h3>
                <InfoOutlined color="secondary" />
              </Box>
              <Box display="flex" alignItems="center">
                <Bolt className={styles["shipping-icon"]} color="success" />
                <Box>
                  <h4>Same day delivery</h4>
                  <p>
                    Messenger livery on scheduled date & time (fee based on
                    distance)
                  </p>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Inventory2Outlined
                  className={styles["shipping-icon"]}
                  color="success"
                  fontSize="small"
                />
                <Box>
                  <h4>Standard delivery</h4>
                  <p>
                    Ship via provided delivery service after authentication (3-5
                    days)
                  </p>
                </Box>
              </Box>
              <Divider variant="fullWidth" />
              <Grid container className={styles["guarantee-label"]}>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VerifiedUserOutlined />
                  100% Authentic Guarantee
                </Grid>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VerifiedUserOutlined />
                  Anti Fraudulent transaction
                </Grid>
              </Grid>
              <Box display="flex" width="100%">
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                >
                  Sell
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  className={styles.button}
                >
                  Buy
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
