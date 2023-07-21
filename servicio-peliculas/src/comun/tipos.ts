export type Pelicula = {
    id: number;
    titulo: string;
    descripcion: string;
    idioma: string;
    trama: string;
    pais: string;
    generos: string;
    anio_estreno: string;
    poster: string;
    clasificacion: string;
};

export const esString = (valor: unknown): valor is string => {
    return typeof valor === 'string';
}

export const esNumber = (valor: unknown): valor is number => {
    return typeof valor === 'number';
}

export const esPelicula = (valor: unknown): valor is Pelicula => {
    if (valor === null || valor === undefined) {
        return false;
    }

    if (typeof valor === 'object') {
        const tieneTitulo = 'titulo' in valor && esString(valor['titulo']);
        const tieneDescripcion = 'descripcion' in valor && esString(valor['descripcion']);
        const tieneIdioma = 'idioma' in valor && esString(valor['idioma']);
        const tieneTrama = 'trama' in valor && esString(valor['trama']);
        const tienePais = 'pais' in valor && esString(valor['pais']);
        const tieneAnioEstreno = 'anio_estreno' in valor && esNumber(valor['anio_estreno']);
        const tieneClasificacion = 'clasificacion' in valor && esString(valor['clasificacion']);
        const generosValidos = 'generos' in valor && esString(valor['generos']);

        return tieneTitulo && tieneDescripcion && tieneIdioma && tieneTrama && tienePais && tieneAnioEstreno && tieneClasificacion && generosValidos;
    }

    return false;
};
