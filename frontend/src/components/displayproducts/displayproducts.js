import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, ImageList, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const DisplayProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json =>setProducts(json))
    }, [])

    return (
        <>
        
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
            <ImageList sx={{height: 'inherit'}} cols={3} gap={10}>
                    {products !== [] && products.map((product) => {
                        return (
                            <>
                                <Card sx={{ maxWidth: 345 }} key={product.id} variant="outlined">
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt="remera"
                                    />
                                    <CardContent>
                                        <Typography variant="p">
                                            {product.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx = {{ display: "flex", justifyContent: "space-between"}}>
                                        <Typography  variant="h5">
                                            {`$ ${product.price}`}
                                        </Typography>
                                        <Button variant="contained" size="small">Agregar al Carrito</Button>
                                    </CardActions>
                                </Card>
                            </>
                        )
                    })}
            </ImageList>
        </>
     );
}
 
export default DisplayProducts;