
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Container,
  Box,
} from "@mui/material";
import {
  Search as SearchIcon,
  GitHub as GitHubIcon,
  Brightness4 as Brightness4Icon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f1f1f1",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const MainContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  textAlign: "center",
}));

const Logo = styled("img")({
  width: 100,
  height: 100,
  marginBottom: 20,
});
const Login=()=>{
    return(
        <div>
      <MainContainer>
        <Logo
          alt="React logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <Typography variant="h3" fontWeight={600}>
          React
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          The library for web and native user interfaces
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Learn React
          </Button>
          <Button variant="outlined">API Reference</Button>
        </Box>
      </MainContainer>        
      
      <Box
      component="footer"
      sx={{
        color: "black",
        py: 4,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Create user interfaces from components
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, mb: 2 }}>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Container>
      <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
      </div>
    )
}
export default Login;