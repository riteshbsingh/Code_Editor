import { Button } from "@mui/material";
import { Stack } from "@mui/system";
// import { useLocation, useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const Navbar = () => {
  return (
    <>
      <Stack
        sx={{
          p: "10px 20px",
        }}
        direction="row"
        spacing={4}
        alignItems="center"
      >
        <img
          style={{
            padding: "5px",
            marginLeft: "5px",
          }}
          src={icon}
          alt="icon"
          width={"180px"}
        />
      </Stack>
    </>
  );
};
export default Navbar;
