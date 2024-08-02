import { Box, Typography } from "@mui/material";
import styles from "@/app/page.module.css";

export default function SecondaryTag(props: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Box className={styles["secondary-tag"]} display="flex" alignItems="center">
      {props.icon}
      <Typography variant="body2" >
        {props.text}
      </Typography>
    </Box>
  );
}
