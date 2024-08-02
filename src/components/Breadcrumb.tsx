"use client";

import styles from "@/app/page.module.css";
import { NotificationsNone, ShareOutlined } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Breadcrumb(props: {
  category: string;
  brand: string;
  name: string;
}) {
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
          {props.category}
        </Link>
        <Link color="inherit" underline="none" href="/">
          {props.brand}
        </Link>
        <Typography color="inherit">{props.name}</Typography>
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
