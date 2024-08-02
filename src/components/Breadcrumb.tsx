"use client"

import styles from "@/app/page.module.css";
import { NotificationsNone, ShareOutlined } from "@mui/icons-material";
import { Box, Breadcrumbs, IconButton, Link, useMediaQuery, useTheme } from "@mui/material";

export default function Breadcrumb() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box className={styles.breadcrumb}>
      <Breadcrumbs
        className={styles["breadcrumb-color"]}
        separator={">"}
        maxItems={isDesktop ? 8 : 3}
        itemsBeforeCollapse={3}
        itemsAfterCollapse={0}
      >
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
  );
}
