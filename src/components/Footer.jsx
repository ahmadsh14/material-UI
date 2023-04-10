import React from "react";
import { Container, Link, Typography, Grid } from "@mui/material";
import "./footer.css";
import shortly from "../img/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Footer = () => {
  return (
    <footer sx={{}}>
      <Container
        sx={{
          width: "100%",
          height: "20vh",
          padding: "10px",
          background: "#232027",
          maxWidth: "none",
          margin: "10px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
              shortly
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Features</Typography>
            <Typography variant="body2" component="span">
              <Link href="#">Link Shortening</Link>
              <Typography component="div" variant="body2" >
                <Link href="#">Branded Links</Link>
              </Typography>
              <Typography component="div" variant="body2">
                <Link href="#">Analytics</Link>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Resources</Typography>
            <Typography variant="body2">
              <Link href="#">Blog</Link>
              <Typography component="div" variant="body2">
                <Link href="#">Developers</Link>
              </Typography>
              <Typography component="div" variant="body2">
                <Link href="#">Support</Link>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Company</Typography>
            <Typography variant="body2">
              <Link href="#">About</Link>
              <Typography component="div" variant="body2">
                <Link href="#">Our Team</Link>
              </Typography>
              <Typography component="div" variant="body2">
                <Link href="#">Careers</Link>
              </Typography>
              <Typography component="div" variant="body2">
                <Link href="#">Contact</Link>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography component="sub">
              <FacebookIcon color="white" />
            </Typography>
            <Typography component="sub">
              <TwitterIcon />
            </Typography>
            <Typography component="sub">
              <PinterestIcon />
            </Typography>
            <Typography component="sub">
              <InstagramIcon />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
