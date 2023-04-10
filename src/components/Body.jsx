import { Box, Typography, Grid, Button, Avatar } from "@mui/material";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import bodyImg from "../img/body.svg";
import Container from "@mui/material/Container";
import CardOverflow from "@mui/joy/CardOverflow";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import firstCard from "../img/icon-brand-recognition.svg";
import secCard from "../img/icon-detailed-records.svg";
import thirdCard from "../img/icon-fully-customizable.svg";
import boost from "../img/bg-boost-desktop.svg";
import bgSearch from "../img/bg-shorten-desktop.svg";
import TextField from "@mui/material/TextField";

import "./body.css";
const Body = () => {
  return (
    <>
      <Container sx={{ width: "100%" }}>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid container sx={{ flexDirection: "column" }}>
            <Grid item xs={10}>
              <Typography
                variant="h2"
                sx={{ width: "60%", fontWeight: "bold" }}
              >
                More than just shorter links
              </Typography>
              <Typography sx={{ width: "50%",paddingBottom:'20px' }}>
                Build your brand's recognition and get detaled insights on how
                your links are performing.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  background: "rgba(43,209,209,255)",
                }}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={10}>
              <CardMedia
                component="img"
                sx={{ width: "90%", display: { xs: "none", sm: "block" } }}
                image={bodyImg}
                alt={bodyImg}
              />
            </Grid>
          </Grid>
        </Box>
        <Container
          sx={{
            width: "100%",
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
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Advanced Statistics
          </Typography>
          <Typography sx={{ width: "36%", textAlign: "center" }}>
            Track how your links are preforming across the web with our advanced
            statistics dashboard.
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
              <IconButton
                aria-label="Like minimal photography"
                size="large"
                variant="solid"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: "1rem",
                  bottom: 0,
                  transform: "translateY(50%)",
                  background: "rgba(58,48,83,255)",
                }}
              >
                <Avatar src={firstCard} />
              </IconButton>
            </CardOverflow>
            <Typography
              level="h2"
              sx={{ fontSize: "md", mt: 2, fontWeight: "bold" }}
            >
              Brand Recognition
            </Typography>
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </Typography>
          </Card>
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
              <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: "1rem",
                  bottom: 0,
                  transform: "translateY(50%)",
                  background: "rgba(58,48,83,255)",
                }}
              >
                <Avatar src={secCard} />
              </IconButton>
            </CardOverflow>
            <Typography
              level="h2"
              sx={{ fontSize: "md", mt: 2, fontWeight: "bold" }}
            >
              Detailed Records
            </Typography>
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Typography>
          </Card>
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
              <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: "1rem",
                  bottom: 0,
                  transform: "translateY(50%)",
                  background: "rgba(58,48,83,255)",
                }}
              >
                <Avatar src={thirdCard} />
              </IconButton>
            </CardOverflow>
            <Typography
              level="h2"
              sx={{ fontSize: "md", mt: 2, fontWeight: "bold" }}
            >
              Fully Customizable
            </Typography>
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Typography>
          </Card>
        </Box>
        <Container
          sx={{
            width: "100%",
            height: "20vh",
            background: "rgba(58,48,83,255)",
            backgroundImage: `url(${boost})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container sx={{width:'100%'}}>
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold" ,padding:'20px'}}
            >
              Boost your links today
            </Typography>
            <Button
              variant="contained"
              sx={{ background: "rgba(43,209,209,255)", borderRadius: "10px" }}
            >
              Get Started
            </Button>
          </Box>
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default Body;
