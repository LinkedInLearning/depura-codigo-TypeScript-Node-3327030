import express from 'express';
import controller from '../controladores/peliculas';
const rutas = express.Router();

rutas.get('/peliculas', controller.obtenerPeliculas);
rutas.get('/peliculas/:id', controller.obtenerPelicula);
rutas.put('/peliculas', controller.agregarPelicula);
rutas.delete('/peliculas/:id', controller.borrarPelicula);
rutas.post('/peliculas/:id', controller.actualizarPelicula);

export = rutas;
