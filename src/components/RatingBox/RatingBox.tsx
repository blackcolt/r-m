import { useState } from "react";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import { labels } from "../../data/Rating";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

interface RatingBoxProps {
  onChange?: (rating: number) => void;
  rating?: number;
}

export const RatingBox = (props: RatingBoxProps) => {
  const { onChange, rating } = props;
  const [value, setValue] = useState<number | null>(rating || 0);
  const [hover, setHover] = useState(-1);
  const [open, setOpen] = useState(false);
  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return (
    <>
      <StyledRating
        name="customized-color"
        value={rating}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? "s" : ""}`
        }
        onChange={(_, newValue) => {
          setOpen(true);
          setValue(newValue);
          onChange?.(newValue || 0);
        }}
        onChangeActive={(_, newHover) => {
          setHover(newHover);
        }}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      {(value ?? 0) > 3 && (
        <Chip
          icon={<ThumbUpOffAltIcon />}
          color="primary"
          label="GOOD VALUE"
          variant="outlined"
        />
      )}
      <Snackbar
        onClose={handleClose}
        open={open}
        autoHideDuration={3000}
        message="Rating stored"
      />
    </>
  );
};
