import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
export default function HalfRating({ rating }) {
  //the component for rating to show we can make evry single part of the every component nest componets but didn't do that much in this project for simplesity and not geting complex by files
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
