/* import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import bgSearch from "../img/bg-shorten-desktop.svg";

const Search = () => {
  return (
    <>
      <Container
        sx={{
          width: "50%",
          background: "rgba(58,48,83,255)",
          backgroundImage: `url(${bgSearch})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10vh",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            label="Shoten a link here..."
            id="fullWidth"
            sx={{ background: "#ffffff", borderRadius: "10px" }}
          />
          <Button
            variant="contained"
            sx={{
              width: "20%",
              height: "6vh",
              borderRadius: "10px",
              background: "rgba(43,209,209,255)",
            }}
          >
            Shorten It!
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Search;
 */