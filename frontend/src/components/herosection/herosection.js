import { Box, Typography } from "@mui/material";

const HeroSection = () => {
    return ( 
        <Box
            sx={{
                height: 600,
                backgroundColor: 'primary.light',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}
        >
            <Typography variant="h1">Hero Section</Typography>
        </Box>
     );
}
 
export default HeroSection;