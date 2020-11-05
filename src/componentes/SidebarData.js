import React from 'react'; 
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import *as  GiIcons from 'react-icons/gi'
import *as  ImIcons from 'react-icons/im'
import *as  BsIcons from 'react-icons/bs'
import Contactanos from '../paginas/Contactanos';


export const SidebarData = [  
    {
       title:'Seleccionar Destino',
       path: '/seleccionardestino',
       icon:<ImIcons.ImCompass />,
       cName: 'nav-text'
    },
    {
        title:'Mi Ubicacion',
        path: '/miubicacion',
        icon:<IoIcons.IoMdCompass />,
        cName: 'nav-text'
     },
     {
        title:'Sitios Sugeridos',
        path: '/sitiossugeridos',
        icon:<GiIcons.GiGps />,
        cName: 'nav-text'
     },
     {
        title:'Calificacion',
        path: '/calificacion',
        icon:<FaIcons.FaStarHalfAlt/>,
        cName: 'nav-text'
     },
     {
        title:'Contactanos',
        path: '/Contactanos',
        icon:<BsIcons.BsPeopleFill />,
        cName: 'nav-text'
     },
     {
        title:'Cerrar Sesión',
        path: '/menu',
        icon:<ImIcons.ImExit/>,
        cName: 'nav-text'
     },
]
