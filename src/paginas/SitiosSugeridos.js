import React, { Component } from 'react'

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

  



export const SitiosSugeridos = () => {

    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (



        
     <div className="SitiosSugeridos">
         
        
       
        <Card className={classes.root,"Primero"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
         Cerro Pan de Azucar
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
        el cerro fue una de los primeros contactos de Medellín con el mundo, este camino se hacía llamar el camino de Piedras Blancas que llevaba directo al Río Magdalena, a partir de este camino se crearon los primeros barrios vecinos, como lo es en el caso del barrio Llanaditas el cual fue creado en 1950.
        
        En el cerro se encuentran varios atractivos de ciudad, como largos senderos ecológicos pertenecientes al jardín circunvalar, (este nombre por cierto aparece escrito en grandes letras en la ladera occidental del cerro); a su vez es un sitio con gran potencial arqueológico y un lugar de peregrinación religiosa, dado que en su cima se halla una gran imagen, de 10 metros de altura de la Virgen María.  <br />
        
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://antioquiaalaire.com/pan-de-az%C3%BAcar-santa-elena" target="_blank">Saber Mas...
  
  </a></Button>
      </CardActions>
    </Card>

      <Card className={classes.root,"Segundo"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Jardin Botanico 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
        Es un gran museo vivo ubicado en pleno corazón de la ciudad y su principal objetivo es crear experiencias de encuentro y convivencia para la ciudad, integradas a estrategias de investigación, conservación y cultura asociadas a la biodiversidad y a la relación del ser humano con el entorno natural.
        Cuenta con colecciones vivas de plantas agrupadas en aulas vivas de aprendizaje. El Jardín es un espacio natural donde los visitantes pueden disfrutar, aprender y deleitarse con la variada biodiversidad de flora y fauna, que ha sido protegida por más de 45 años.
          <br />

         
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.botanicomedellin.org/" target="_blank">Saber Mas...
  
      </a></Button>
      </CardActions>
    </Card>
    <Card className={classes.root,"Tercero"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
        Casa de la Memoria 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
        Con el fin de contribuir al ejercicio de la memoria propiciando escenarios de diálogo abiertos y plurales, críticos y reflexivos para la comprensión y superación del conflicto armado y las violencias de Medellín, Antioquia y el país, desde la pluralidad y el reconocimiento de las voces diversas.
         Donde las memorias del conflicto armado que ha vivido el país tienen un lugar físico y simbólico, se ha consolidado como un actor en la transformación cultural; un proyecto político, pedagógico y social, incluyente y representativo, que contribuye a la transformación de las lógicas de la guerra para reencontrar la esperanza y pensar en otros futuros posibles.
    
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.museocasadelamemoria.gov.co/" target="_blank">Saber Mas...
  
  </a></Button>
      </CardActions>
    </Card>

    <Card className={classes.root,"Cuarto"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Parque Botero 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
        Monumentales figuras de bronce adornan con gracia las inmediaciones del Museo de Antioquia en uno de los lugares más icónicos y tradicionales de Medellín: El Parque Berrío, sede del único lugar al aire libre en el mundo que cuenta con 23 esculturas del Maestro Fernando Botero, las cuales fueron donadas en el 2002 a la ciudad y se convertirían en la excusa perfecta para inaugurar la Plaza de las Esculturas, o como todo el mundo la conoce en Medellín, La Plaza Botero. Allí, las esculturas de bronc
e son expresión viva de la sensualidad que el maestro Botero quiere expresar con su obra a través del volumen.
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.medellin.travel/destinations/plaza-botero/" target="_blank">Saber Mas...
  
  </a></Button>
      </CardActions>
    </Card>
       
    <Card className={classes.root,"Cinco"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Parque Explora
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
        Es Parque Explora – Acuario – Planetario, un centro interactivo para la apropiación y la divulgación de la ciencia y la tecnología con más de 300 experiencias interactivas repartidas en varias salas y espacios de experimentación para todos, además de uno de los acuarios más grandes de Suramérica.
Explora es el centro de difusión y promoción científica y tecnológica más importante de Medellín, y ofrece a la población local y a los visitantes la posibilidad de estimular su creatividad, experimentar, aprender divirtiéndose y construir conocimientos para el desarrollo, el bienestar y la dignidad de la ciudad.
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.parqueexplora.org" target="_blank">Saber Mas...
  
  </a></Button>
      </CardActions>
    </Card>
    <Card className={classes.root,"Seis"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
         Escaleras Electricas 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
        Las escaleras eléctricas de la Comuna 13, son  las primeras  de carácter público y gratuito en el país, ubicadas en el barrio “Las Independencias”, son  referente del urbanismo social y de la transformación de la Ciudad pues hasta hace algunos años, esta comuna, era conocida como una de las zonas de mayor conflicto en Medellín.

Recorrer este barrio es toda una experiencia en torno a su historia, en este lugar las nuevas generaciones se han encargado de construir una nueva historia que se plasma a punta de aerosol y Hip Hop. Este recorrido te permitirá observar muestras artísticas como graffitis, danza, música y gastronomía. <br />
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href="https://www.terminalesmedellin.com/convenio/escaleras-electricas/" target="_blank">Saber Mas...
  
  </a></Button>
      </CardActions>
    </Card>
    
</div>
    )
}



export default SitiosSugeridos