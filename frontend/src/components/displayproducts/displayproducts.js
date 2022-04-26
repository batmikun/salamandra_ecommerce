import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, ImageList, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Banner from "../../static/images/banner.webp";

const DisplayProducts = () => {
    return ( 
        <Container>
        
            <Box
                sx={{
                    height: 64,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <FormControl fullWidth>
                    <InputLabel>Categorias</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={1}
                        label="Categorias"
                    >
                            <MenuItem value={1}>Remeras</MenuItem>
                            <MenuItem value={2}>Buzos</MenuItem>
                            <MenuItem value={3}>Gorros</MenuItem>
                            <MenuItem value={4}>Medias</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <ImageList sx={{height: 'inherit'}} cols={4} gap={8}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={Banner}
                    alt="remera"
                />
                <CardContent sx = {{backgroundColor: "secondary.light"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    Remera OsoBuco
                    </Typography>
                </CardContent>
                <CardActions sx = {{backgroundColor: "secondary.light"}}>
                    <Button variant="contained" size="small">Agregar al Carrito</Button>
                </CardActions>
            </Card>
            </ImageList>
        </Container>
     );
}
 
export default DisplayProducts;