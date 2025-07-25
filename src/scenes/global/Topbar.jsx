import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon sx={{ color: "text.primary" }}></SearchIcon>
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ color: "text.primary" }}></DarkModeOutlinedIcon>
          ) : (
            <LightModeOutlinedIcon sx={{ color: "text.primary" }}></LightModeOutlinedIcon>
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: "text.primary" }}></NotificationsOutlinedIcon>
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon sx={{ color: "text.primary" }}></SettingsOutlinedIcon>
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon sx={{ color: "text.primary" }}></PersonOutlinedIcon>
        </IconButton>
      </Box>
    </Box>
  );
};
export default Topbar;
