import React, { Component } from 'react'
import Bootstrap from 'bootstrap'
import './Contactanos.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SitiosSugeridos.css';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });




export const Contactanos = () => {

    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className='Contactanos'>

      <Card className={classes.root,"Primero1"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Andres Felipe Montoya
          
        </Typography>
       
          <div className="foto1">
       <img src="https://scontent.feoh5-1.fna.fbcdn.net/v/t1.0-9/123087686_3296212490476071_4771901612403786978_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHQh5Q76LwK42Pp62sPLe-fMyhGRYh4OYYzKEZFiHg5hhimA6H7GT4dLMiy24HhuIHpWFRv59XKZDqsVi-H-IJ1&_nc_ohc=yepEm1ShOfkAX9axVSb&_nc_ht=scontent.feoh5-1.fna&oh=97b19469f6be7d5bff10c2faf7a74267&oe=5FC4C4BB" border="" alt="" width="400" height="250"/>
        </div>
        <Typography variant="body2" component="p">
          Correo:andresmontoyabedoya100@gmail.com -
          Celular:3214273391
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.facebook.com/andresfelipe.montoyabedoya/" target="_blank">FacebooK
      </a></Button>
      </CardActions>
      
    </Card>



    <Card className={classes.root,"Segundo2"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
         Salomon Ortiz Ortiz
        </Typography>
        
        <div className="foto1">
       <img src="https://scontent.feoh5-1.fna.fbcdn.net/v/t1.0-9/90466094_1659552994187145_3452475573597634560_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHjjevxMOi0tT2cOnamJ1tn5roqupPk0kfmuiq6k-TSR3HI_kx7oIXCufDfzVTOxlb6Ue5E-QG4DTvPeiYeD43g&_nc_ohc=dze0E2ztLf8AX-eOGgu&_nc_ht=scontent.feoh5-1.fna&oh=e057697b749e384f74abc149bb97512e&oe=5FC69A57" border="" alt="" width="400" height="250"/>
        </div>
        <Typography variant="body2" component="p">
          Correo: Salomonortz@gmail.com -
         Celular:5555555
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.facebook.com/Dj.T.otrtiz" target="_blank">Facebook
      
      </a></Button>
      </CardActions>
    </Card>

    <Card className={classes.root,"Tercero3"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Kevin Alexander Castaño
        </Typography>
        <div className="foto1">
       <img src="https://scontent.feoh5-1.fna.fbcdn.net/v/t1.0-9/122036003_445005479812926_6355527549475352559_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH2M2RtPnEbrAYPeYA6z2rgkOEtK1Oj9ziQ4S0rU6P3OF2VPFaQXY96huomOXEYICFih10kL2mIyUO3pH90k7ab&_nc_ohc=xxSlVnsR1xsAX_9Slca&_nc_ht=scontent.feoh5-1.fna&oh=87867b5dc650ba25e8c057de5ee1a1d6&oe=5FC7224Fhttps://scontent.feoh5-1.fna.fbcdn.net/v/t1.0-9/122036003_445005479812926_6355527549475352559_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH2M2RtPnEbrAYPeYA6z2rgkOEtK1Oj9ziQ4S0rU6P3OF2VPFaQXY96huomOXEYICFih10kL2mIyUO3pH90k7ab&_nc_ohc=xxSlVnsR1xsAX_9Slca&_nc_ht=scontent.feoh5-1.fna&oh=87867b5dc650ba25e8c057de5ee1a1d6&oe=5FC7224F" border="" alt="" width="400" height="250"/>
        </div>
        <Typography variant="body2" component="p">
          Correo: kevin.castano.montoya@gmail.com -
          Celular: 5555555
          <br />
    
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.facebook.com/kevin.castano.5872682" target="_blank">Facebook
      </a></Button>
       
      </CardActions>
    </Card>

        </div>
    )
}



export default Contactanos