import { Grid, Avatar, Button, Typography, Stack, Box } from "@mui/material";
import Divider from '@mui/material/Divider';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const DoctorCard = ({ doctor }) => {
    return (
        <div>
            <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Avatar sx={{ width: 130 , height: 130 }} src={doctor.image} />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" color="primary">{doctor.name}</Typography>
                    <Typography variant="body2">10 years overall experience</Typography>
                    <Typography variant="body2" fontSize="13px"><b>{doctor.address}</b>, {doctor.clinic} </Typography>
                    <Typography variant="body2" fontSize="13px">₹{doctor.fees} Consultation fee at clinic</Typography>
                    <Box 
                         component="span" 
                         padding="2px 5px" 
                         bgcolor="#00A500" 
                         display="flex" 
                         alignItems="center" 
                         maxWidth="min-content" 
                         justifyContent="center"
                         borderRadius="5px"
                    >
        <ThumbUpIcon fontSize="8px" style={{color:"white", marginRight:"3px"}}/>
        <Typography variant="body2" fontSize="10px" fontWeight={500} color="white">{doctor.rating *20}%</Typography>
    </Box>
                    <Typography variant="body2" fontSize="12px" fontWeight="bold">17 patient stories</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Stack gap={2} display="flex" alignItems="center">
                        <br/><br/><br/><br/>
                        <Typography variant="body2" display="flex" alignItems="center" color="#00A500">
                            Available Today
                        </Typography>
                        <Button variant="contained" color="primary" style={{ fontSize: "10px", fontWeight: "600" }}>
                            Book Appointment<br /> No booking fee
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            </div>
            <Divider />
        </div>
    );
};

export default DoctorCard;
