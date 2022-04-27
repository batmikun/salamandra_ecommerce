import { Container, Grid } from "@mui/material";
import DisplayProducts from "../components/displayproducts/displayproducts";
import HeroSection from "../components/herosection/herosection";

const Home = () => {

    return ( 
        
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <HeroSection /> 
                </Grid>
                <Grid item xs={12}>
                    <Container>
                        <DisplayProducts />
                    </Container>
                </Grid>            
            </Grid>
    );
}
 
export default Home;    