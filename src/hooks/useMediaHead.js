import { useMediaQuery } from "@mui/material";
export default function useMediaHead() {
  const mediaQuery = useMediaQuery("(max-width:400px");
  if (mediaQuery) return "150px";
  return "200px";
}
// didn't have to use this custome hook i have some custome hook in component but thay are not reuseble so didn't make files for them and there were 1 or 2 lines at total 