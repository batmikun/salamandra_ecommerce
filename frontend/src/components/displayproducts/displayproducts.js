import { Box, ImageList, ImageListItem } from "@mui/material";
import Banner from "../../static/images/banner.webp";

const DisplayProducts = () => {
    return ( 
        <>
            <ImageList sx={{padding:2, height: 'inherit'}} cols={4} gap={8}>
                <ImageListItem>
                    <img
                        src={Banner}
                        alt="Product"
                        loading="lazy"
                    />
                <Box
                    sx={{
                        height: 100,
                        backgroundColor: 'primary.light',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                />
                </ImageListItem>
            </ImageList>
        </>
     );
}
 
export default DisplayProducts;