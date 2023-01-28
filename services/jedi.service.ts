import axios, {AxiosResponse} from 'axios';
import {episodeUrl, jediUrlById, SWAPI_PLANETS} from '../integrations/swapi/constants';
import {Character, Film, GalaxyData, Species, Starship} from "../interfaces";

export class JediService {
    public async characterById(characterId: number): Promise<Character> {
        const url = jediUrlById(characterId);

        return await axios.get(url).then((response: AxiosResponse) => {
            return this.buildCharacter(response);
        });
    }

    private buildCharacter(response: AxiosResponse<any, any>) {
        const character: Character = {
            name: response.data.name,
            height: response.data.height,
            mass: response.data.mass,
            hair_color: response.data.hair_color,
            skin_color: response.data.skin_color,
            eye_color: response.data.eye_color,
            birth_year: response.data.birth_year,
            gender: response.data.gender,
            starships: response.data.starships
        }
        return character;
    }

    public async getStarships(starships: any[]): Promise<Starship[]> {
        return axios.all(starships.map((endpoint: string) => axios.get(endpoint))).then((data: any[]) => {
            const starships: Starship[] = data.map((item: any) => {
                return {
                    name: item.data.name,
                    model: item.data.model,
                    manufacturer: item.data.manufacturer,
                    cost_in_credits: item.data.cost_in_credits,
                    length: item.data.length,
                    max_atmosphering_speed: item.data.max_atmosphering_speed,
                    crew: item.data.crew,
                    passengers: item.data.passengers,
                    cargo_capacity: item.data.cargo_capacity,
                    consumables: item.data.consumables,
                    hyperdrive_rating: item.data.hyperdrive_rating,
                    MGLT: item.data.MGLT,
                    starship_class: item.data.starship_class
                }
            });

            return starships;
        })
    }

    public async starwarsEpisodeByNumber(filmId: number): Promise<Film> {
        const url = episodeUrl(filmId)
        return await axios.get(url).then((response: AxiosResponse) => {
            const film: Film = {
                title: response.data.title,
                episode_id: response.data.episode_id,
                opening_crawl: response.data.opening_crawl,
                director: response.data.director,
                producer: response.data.producer,
                release_date: response.data.release_date,
                species: response.data.species
            }

            return film;
        });
    }

    public async classifyFilmSpecies(species: any[]): Promise<Species[]> {
        return axios.all(species.map((endpoint: string) => axios.get(endpoint))).then((data: any[]) => {
            const starships: Species[] = data.map((item: any) => {
                return {
                    name: item.data.name,
                    classification: item.data.classification,
                    designation: item.data.designation,
                    average_height: item.data.average_height,
                    skin_colors: item.data.skin_colors,
                    hair_colors: item.data.hair_colors,
                    eye_colors: item.data.eye_colors,
                    average_lifespan: item.data.average_lifespan,
                    homeworld: item.data.homeworld,
                    language: item.data.language
                }
            });

            return starships;
        })
    }

    public async galaxyPlanetPopulation(): Promise<{ total_planets: number; global_population: string }> {
        let pageNumber: number = 1;
        let planetsCount: number = 0;
        let galaxyPopulation: number = 0;

        while (pageNumber <= 6) { // not the best implementation, but it works for now
            await axios.get(SWAPI_PLANETS + '?page=' + pageNumber).then((response: AxiosResponse) => {
                const responsePlanets: any[] = response.data.results;

                if (responsePlanets[0].population !== 'unknown') {
                    galaxyPopulation += parseInt(responsePlanets[0].population, 10);
                }

                planetsCount += responsePlanets.length;
            })

            pageNumber += 1;
        }

        return {
            total_planets: planetsCount,
            global_population: new Intl.NumberFormat('en-US', {maximumSignificantDigits: 3}).format(galaxyPopulation),
        }
    }
}
