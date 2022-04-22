import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar, Link } from "@mui/material";

const AppMenu = () =>  {
    return (
        <AppBar position="static" color="default"> 
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar 
                        alt="Salamandra" 
                        src="/static/images/salamandra_logo.jpg" 
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        Salamandra
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'end'  }}>
                        <Link color="primary" sx={{ minWidth: 100 }} href="/"  underline="none">Home</Link>
                        <Link color="primary" sx={{ minWidth: 100 }} href="/about_us"  underline="none">About Us</Link>
                        <Link color="primary" sx={{ minWidth: 100 }} href="/contact_us"  underline="none">Contact Us</Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
  }

export default AppMenu;
  