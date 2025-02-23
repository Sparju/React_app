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

const ReactUI = () => {
  return (
    <div>
      <AppBar color="default" position="static" elevation={0}>
        <Toolbar>
          <img
            alt="React logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            width="40"
            height="40"
            style={{ marginRight: 10 }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            v19
          </Typography>
          <StyledSearch>
            <SearchIcon sx={{ marginRight: 1 }} />
            <InputBase placeholder="Search…" />
          </StyledSearch>
          <Typography variant="body2" sx={{ marginRight: 2 }}>
            Ctrl K
          </Typography>
          <Button color="inherit">Learn</Button>
          <Button color="inherit">Reference</Button>
          <Button color="inherit">Community</Button>
          <Button color="inherit">Blog</Button>
          <IconButton>
            <Brightness4Icon />
          </IconButton>
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

    </div>
  );
};

export default ReactUI;
