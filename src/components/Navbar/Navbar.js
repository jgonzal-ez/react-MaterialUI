import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {mainNavbarItems} from "../consts/navbaritems"
import { navbarStyles } from './styles';
import { useNavigate, useParams } from 'react-router';

const Navbar = () => {
    const drawerWidth = 220;
    const navigate = useNavigate();

    return (
        <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((text, index) => (
            <ListItem
                button
                key={text.id}
                onClick={() => navigate(text.route)}
            >
                <ListItemIcon  sx={navbarStyles.icons}>
                    {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} sx={navbarStyles.text}/>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    )
}

export default Navbar;