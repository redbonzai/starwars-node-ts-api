
export const SWAPI_PLANETS = process.env.SWAPI_ENDPOINT + 'planets/';
export function jediUrlById(jediId: number): string {
    const characters: any = {
        1: process.env.SWAPI_ENDPOINT + 'people/1', // Luke Skywalker
        2: process.env.SWAPI_ENDPOINT + 'people/2', // C-3PO
        3: process.env.SWAPI_ENDPOINT + 'people/3', // R2-D2
        4: process.env.SWAPI_ENDPOINT + 'people/4', // Darth Vader
        5: process.env.SWAPI_ENDPOINT + 'people/5', // Leia Organa
        6: process.env.SWAPI_ENDPOINT + 'people/6', // Owen Lars
        7: process.env.SWAPI_ENDPOINT + 'people/7', // Beru Whitesun lars
        8: process.env.SWAPI_ENDPOINT + 'people/8', // R5-D4
        9: process.env.SWAPI_ENDPOINT + 'people/9', // Biggs Darklighter
        10: process.env.SWAPI_ENDPOINT + 'people/10', // Obi-Wan Kenobi
        11: process.env.SWAPI_ENDPOINT + 'people/11', // Anakin Skywalker
        20: process.env.SWAPI_ENDPOINT + 'people/20', // Yoda
    }

    return characters[jediId];
}

export function episodeUrl(filmId: number): string {
    const episodes: any = {
        1: process.env.SWAPI_ENDPOINT + 'films/1', // 4th
        2: process.env.SWAPI_ENDPOINT + 'films/2', // 5th
        3: process.env.SWAPI_ENDPOINT + 'films/3', // 6th
        4: process.env.SWAPI_ENDPOINT + 'films/4', // 1st
        5: process.env.SWAPI_ENDPOINT + 'films/5', // 2nd
        6: process.env.SWAPI_ENDPOINT + 'films/6', // 3rd
    }

    return episodes[filmId];
}
