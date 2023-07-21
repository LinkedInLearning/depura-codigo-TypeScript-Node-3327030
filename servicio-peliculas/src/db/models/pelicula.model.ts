import { RowDataPacket } from "mysql2"
import { Pelicula } from "../../comun/tipos";

type PeliculaDB = RowDataPacket & Pelicula;
export default PeliculaDB;
