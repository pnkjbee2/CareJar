import * as React from 'react';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InfoCard = ({ image, type, description }) => {
  const navigate = useNavigate();
  const handleNavigation = (type)=>{
    navigate(`/${type}`)
  }

return (
    <Paper
    onClick={()=>{handleNavigation(type)}}
      elevation={0} 
      sx={{
        backgroundColor: 'white',
        maxWidth: 300,
        transition: 'transform 0.2s', 
        '&:hover': {
          transform: 'scale(1.05)'
        },
        overflow: 'hidden'
        
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant='h6'>{type}</Typography>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Paper>
  );

}

export default InfoCard;
