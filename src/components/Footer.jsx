import React from "react";
import { Grid, Link, Typography, Container, Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

// Styled footer container with a gradient background
const FooterContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to right, #1e3c72, #2a5298)", // Blue gradient
  color: "#fff",
  padding: theme.spacing(6, 2),
  marginTop: theme.spacing(4),
  borderTop: "4px solid #1565c0",
}));

// Styled footer links with hover effects
const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#ddd",
  display: "block",
  marginBottom: theme.spacing(1),
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#fff",
    textDecoration: "underline",
  },
}));

const FooterTitle = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#fff",
});

const SocialIcons = styled(IconButton)({
  color: "#fff",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Column 1 - Meta Open Source */}
          <Grid item xs={12} sm={2}>
            <FooterTitle>Meta Open Source</FooterTitle>
            <Typography variant="body2">Copyright © Meta</Typography>
            <Typography variant="body2">Platforms, Inc</Typography>
          </Grid>

          {/* Column 2 - Learn React */}
          <Grid item xs={12} sm={2}>
            <FooterTitle>Learn React</FooterTitle>
            <FooterLink href="#">Quick Start</FooterLink>
            <FooterLink href="#">Installation</FooterLink>
            <FooterLink href="#">Describing the UI</FooterLink>
            <FooterLink href="#">Adding Interactivity</FooterLink>
            <FooterLink href="#">Managing State</FooterLink>
          </Grid>

          {/* Column 3 - API Reference */}
          <Grid item xs={12} sm={2}>
            <FooterTitle>API Reference</FooterTitle>
            <FooterLink href="#">React APIs</FooterLink>
            <FooterLink href="#">React DOM APIs</FooterLink>
          </Grid>

          {/* Column 4 - Community */}
          <Grid item xs={12} sm={2}>
            <FooterTitle>Community</FooterTitle>
            <FooterLink href="#">Code of Conduct</FooterLink>
            <FooterLink href="#">Meet the Team</FooterLink>
            <FooterLink href="#">Docs Contributors</FooterLink>
            <FooterLink href="#">Acknowledgements</FooterLink>
          </Grid>

          {/* Column 5 - More & Social Links */}
          <Grid item xs={12} sm={2}>
            <FooterTitle>More</FooterTitle>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">React Native</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            
            {/* Social Media Icons */}
            <Box mt={2} display="flex" gap={1}>
              <SocialIcons href="#">
                <InstagramIcon />
              </SocialIcons>
              <SocialIcons href="#">
                <FacebookIcon />
              </SocialIcons>
              <SocialIcons href="#">
                <GitHubIcon />
              </SocialIcons>
              <SocialIcons href="#">
                <XIcon />
              </SocialIcons>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
