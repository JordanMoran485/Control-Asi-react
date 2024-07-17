import React from "react";
import { Home } from "./Paginas";
import { Curso } from "./Paginas/Curso/Curso";
import { Asistencia } from "./Paginas/asistencia/Asistencia";
import { Inicio } from "./Paginas/Inicio-sesion/Inicio";
import { Registro } from "./Paginas/Registro-sesion/Registro";
import { Lista } from "./Paginas/Lista-estudiante/Lista";

export const routes = [
    
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/Curso',
        element: <Curso/>
    },

    {
        path: '/asistencia',
        element: <Asistencia/>
    },

    {
        path: '/Inicio-sesion',
        element: <Inicio/>
    },

    {
        path: '/Registro-sesion',
        element: <Registro></Registro>
    },

    {
        path: '/Lista-estudiante',
        element: <Lista></Lista>
    }
    
  
]