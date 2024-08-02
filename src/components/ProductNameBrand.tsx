import { Typography } from "@mui/material";

export default function ProductNameBrand(
  props: {
    name: string;
    brand: string;
    sku: string;
  }
) {
  return (
    <>
      <Typography variant="body2" fontSize="larger" gutterBottom>
        {props.name}
      </Typography>
      <Typography variant="body2" color="gray" margin="1rem 0" gutterBottom>
        {props.brand} | {props.sku}
      </Typography>
    </>
  );
}
