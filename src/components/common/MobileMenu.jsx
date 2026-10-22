import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CategoryIcon from "@mui/icons-material/Category";
import Groups3Icon from "@mui/icons-material/Groups3";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DarkModeButton from "./DarkModeButton.jsx";
import useTheme from '../../constants/useTheme';

const MobileMenu = ({ menuOpen, toggleMenu, Icon }) => {
  const { theme } = useTheme();

  return (
    <>
      <button type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={toggleMenu}>
        <Icon />
      </button>
      {menuOpen && (
        <Paper
          sx={{
            position: "absolute",
            top: "72px",
            right: 16,
            width: "min(320px, calc(100vw - 32px))",
            zIndex: 10,
            backgroundColor: theme.background,
            color: theme.textPrimary,
          }}
        >
          <MenuList>
            <MenuItem>
              <DarkModeButton />
            </MenuItem>
            <MenuItem component={Link} to="/soluciones" onClick={toggleMenu}>
              <ListItemIcon>
                <CategoryIcon fontSize="medium" sx={{ color: theme.textPrimary }} />
              </ListItemIcon>
              <ListItemText sx={{ color: theme.textPrimary }}>
                Soluciones
              </ListItemText>
            </MenuItem>
            <MenuItem component={Link} to="/nosotros" onClick={toggleMenu}>
              <ListItemIcon>
                <Groups3Icon fontSize="medium" sx={{ color: theme.textPrimary }} />
              </ListItemIcon>
              <ListItemText sx={{ color: theme.textPrimary }}>
                Nosotros
              </ListItemText>
            </MenuItem>
            <MenuItem component={Link} to="/insigths" onClick={toggleMenu}>
              <ListItemIcon>
                <TipsAndUpdatesIcon fontSize="medium" sx={{ color: theme.textPrimary }} />
              </ListItemIcon>
              <ListItemText sx={{ color: theme.textPrimary }}>
                Insigths
              </ListItemText>
            </MenuItem>
            <MenuItem component={Link} to="/contacto" onClick={toggleMenu}>
              <ListItemIcon>
                <ConnectWithoutContactIcon fontSize="medium" sx={{ color: theme.textPrimary }} />
              </ListItemIcon>
              <ListItemText sx={{ color: theme.textPrimary }}>
                Contacto
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      )}
    </>
  );
};

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default MobileMenu;
