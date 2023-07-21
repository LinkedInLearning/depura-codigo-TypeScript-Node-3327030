import { Request, Response, NextFunction } from 'express';
import PeliculaDB from '../db/models/pelicula.model'
import PeliculaDBRepositorio from '../db/repositorio/pelicula.repository';
import { Pelicula, esPelicula } from '../comun/tipos';

const obtenerPeliculas = async (req: Request, res: Response, next: NextFunction) => {
    const titulo = req.params.titulo;
    PeliculaDBRepositorio.obtenerTodas({titulo}).then((peliculas: PeliculaDB[]) => {
        return res.status(200).json({
            message: peliculas
        });
    });
};

const obtenerPelicula = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    PeliculaDBRepositorio.obtenerPorId(id).then((pelicula: PeliculaDB) => {
        return res.status(200).json({
            message: pelicula
        });
    });
};

const actualizarPelicula = async (req: Request, res: Response, next: NextFunction) => {
    const params: Pelicula = {
        id: parseInt(req.params.id),
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        idioma: req.body.idioma,
        trama: req.body.trama,
        pais:req.body.pais,
        generos: req.body.generos,
        anio_estreno: req.body.anio_estreno,
        poster: req.body.poster,
        clasificacion: req.body.clasificacion,
    };
    PeliculaDBRepositorio.actualizar(params).then((filasAfectadas: number) => {
        return res.status(200).json({
            filasAfectadas
        });
    })
};

const borrarPelicula = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    PeliculaDBRepositorio.borrar(id).then(() => {
        return res.status(200).json({
            message: 'la película se ha borrado'
        });
    });
};

const agregarPelicula = async (req: Request, res: Response, next: NextFunction) => {
    const params: Omit<Pelicula, 'id'> = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        idioma: req.body.idioma,
        trama: req.body.trama,
        pais:req.body.pais,
        generos: req.body.generos,
        anio_estreno: req.body.anio_estreno,
        poster: req.body.poster,
        clasificacion: req.body.clasificacion,
    };

    if(!esPelicula(params)){
        return res.status(400).json({
            message: 'los parámetros no son válidos para agregar una película'
        });
    }
    
    PeliculaDBRepositorio.guardar(params).then((pelicula) => {
        return res.status(200).json({
            pelicula
        });
    });
};

export default { obtenerPeliculas, obtenerPelicula, actualizarPelicula, borrarPelicula, agregarPelicula };
