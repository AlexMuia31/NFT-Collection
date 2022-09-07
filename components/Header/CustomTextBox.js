import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "#0FE9EF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0FE9EF",
    },
  },
  ".MuiInputBase-root": {
    backgroundColor: "#33343E",
    borderRadius: "20px",
  },
});
