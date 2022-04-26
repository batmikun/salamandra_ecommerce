import { Box, Typography } from "@mui/material";

const AppFooter = () => {
    return ( 
        <>
        <Box
            sx={{
                height: 64,
                backgroundColor: 'primary.light',
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="p">
                Privacy Policy 
            </Typography>
        </Box>
        </>
     );
}
 
export default AppFooter;