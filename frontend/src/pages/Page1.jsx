import InfoCard from '../components/InfoCard';
import { Typography, Grid, Button } from '@mui/material';


const Page1 = () => {

    return(
        <div>
            
           <Typography variant="h4" color="#3e4346">Book an appointment for an in-clinic consultation</Typography>
           <Typography variant="body" color="#3e4346">Find experienced doctors across all specialities </Typography>
           <br/><br/>
           <Grid container spacing={2}>
           <Grid item xs={4}>
            <InfoCard 
                image="/dentist.jpg"
                type="Dentist"
                description="Teeth Troubles? Schedule a dental checkup"
            />
            </Grid>
            <Grid item xs={4}>
            <InfoCard 
                image="/gynac.jpg"
                type="Gynecologist"
                description="Explore for women's health, pregnancy and infertility treatments"
            />
            </Grid>
            <Grid item xs={4}>
            <InfoCard 
                image="/dietician.jpg"
                type="Dietitian"
                description="Get guidance on eating right, weight management and sports nutrition"
            />
            </Grid>
            </Grid>
            
        
        
        </div>
    )
}

export default Page1;