import axios from "axios";
import moxios from 'moxios';
import sinon from "sinon";
import {JediService} from "../../src/services/jedi.service";

let jediService: JediService;

const successfulStarshipsResponse: any = {
    "data": {
        "luke": {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "starships": [
                {
                    "name": "X-wing",
                    "model": "T-65 X-wing",
                    "manufacturer": "Incom Corporation",
                    "cost_in_credits": "149999",
                    "length": "12.5",
                    "max_atmosphering_speed": "1050",
                    "crew": "1",
                    "passengers": "0",
                    "cargo_capacity": "110",
                    "consumables": "1 week",
                    "hyperdrive_rating": "1.0",
                    "MGLT": "100",
                    "starship_class": "Starfighter"
                },
                {
                    "name": "Imperial shuttle",
                    "model": "Lambda-class T-4a shuttle",
                    "manufacturer": "Sienar Fleet Systems",
                    "cost_in_credits": "240000",
                    "length": "20",
                    "max_atmosphering_speed": "850",
                    "crew": "6",
                    "passengers": "20",
                    "cargo_capacity": "80000",
                    "consumables": "2 months",
                    "hyperdrive_rating": "1.0",
                    "MGLT": "50",
                    "starship_class": "Armed government transport"
                }
            ]
        }
    }
}
const phantomMenaceSpeciesSuccessResponse: any ={
    "data": {
        "film": {
            "title": "The Phantom Menace",
                "episode_id": 1,
                "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
                "director": "George Lucas",
                "producer": "Rick McCallum",
                "release_date": "1999-05-19",
                "species": [
                {
                    "name": "Human",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "180",
                    "skin_colors": "caucasian, black, asian, hispanic",
                    "hair_colors": "blonde, brown, black, red",
                    "eye_colors": "brown, blue, green, hazel, grey, amber",
                    "average_lifespan": "120",
                    "homeworld": "https://swapi.dev/api/planets/9/",
                    "language": "Galactic Basic"
                },
                {
                    "name": "Droid",
                    "classification": "artificial",
                    "designation": "sentient",
                    "average_height": "n/a",
                    "skin_colors": "n/a",
                    "hair_colors": "n/a",
                    "eye_colors": "n/a",
                    "average_lifespan": "indefinite",
                    "homeworld": null,
                    "language": "n/a"
                },
                {
                    "name": "Yoda's species",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "66",
                    "skin_colors": "green, yellow",
                    "hair_colors": "brown, white",
                    "eye_colors": "brown, green, yellow",
                    "average_lifespan": "900",
                    "homeworld": "https://swapi.dev/api/planets/28/",
                    "language": "Galactic basic"
                },
                {
                    "name": "Neimodian",
                    "classification": "unknown",
                    "designation": "sentient",
                    "average_height": "180",
                    "skin_colors": "grey, green",
                    "hair_colors": "none",
                    "eye_colors": "red, pink",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/18/",
                    "language": "Neimoidia"
                },
                {
                    "name": "Gungan",
                    "classification": "amphibian",
                    "designation": "sentient",
                    "average_height": "190",
                    "skin_colors": "brown, green",
                    "hair_colors": "none",
                    "eye_colors": "orange",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/8/",
                    "language": "Gungan basic"
                },
                {
                    "name": "Toydarian",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "120",
                    "skin_colors": "blue, green, grey",
                    "hair_colors": "none",
                    "eye_colors": "yellow",
                    "average_lifespan": "91",
                    "homeworld": "https://swapi.dev/api/planets/34/",
                    "language": "Toydarian"
                },
                {
                    "name": "Dug",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "100",
                    "skin_colors": "brown, purple, grey, red",
                    "hair_colors": "none",
                    "eye_colors": "yellow, blue",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/35/",
                    "language": "Dugese"
                },
                {
                    "name": "Twi'lek",
                    "classification": "mammals",
                    "designation": "sentient",
                    "average_height": "200",
                    "skin_colors": "orange, yellow, blue, green, pink, purple, tan",
                    "hair_colors": "none",
                    "eye_colors": "blue, brown, orange, pink",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/37/",
                    "language": "Twi'leki"
                },
                {
                    "name": "Aleena",
                    "classification": "reptile",
                    "designation": "sentient",
                    "average_height": "80",
                    "skin_colors": "blue, gray",
                    "hair_colors": "none",
                    "eye_colors": "unknown",
                    "average_lifespan": "79",
                    "homeworld": "https://swapi.dev/api/planets/38/",
                    "language": "Aleena"
                },
                {
                    "name": "Vulptereen",
                    "classification": "unknown",
                    "designation": "sentient",
                    "average_height": "100",
                    "skin_colors": "grey",
                    "hair_colors": "none",
                    "eye_colors": "yellow",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/39/",
                    "language": "vulpterish"
                },
                {
                    "name": "Xexto",
                    "classification": "unknown",
                    "designation": "sentient",
                    "average_height": "125",
                    "skin_colors": "grey, yellow, purple",
                    "hair_colors": "none",
                    "eye_colors": "black",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/40/",
                    "language": "Xextese"
                },
                {
                    "name": "Toong",
                    "classification": "unknown",
                    "designation": "sentient",
                    "average_height": "200",
                    "skin_colors": "grey, green, yellow",
                    "hair_colors": "none",
                    "eye_colors": "orange",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/41/",
                    "language": "Tundan"
                },
                {
                    "name": "Cerean",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "200",
                    "skin_colors": "pale pink",
                    "hair_colors": "red, blond, black, white",
                    "eye_colors": "hazel",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/43/",
                    "language": "Cerean"
                },
                {
                    "name": "Nautolan",
                    "classification": "amphibian",
                    "designation": "sentient",
                    "average_height": "180",
                    "skin_colors": "green, blue, brown, red",
                    "hair_colors": "none",
                    "eye_colors": "black",
                    "average_lifespan": "70",
                    "homeworld": "https://swapi.dev/api/planets/44/",
                    "language": "Nautila"
                },
                {
                    "name": "Zabrak",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "180",
                    "skin_colors": "pale, brown, red, orange, yellow",
                    "hair_colors": "black",
                    "eye_colors": "brown, orange",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/45/",
                    "language": "Zabraki"
                },
                {
                    "name": "Tholothian",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "unknown",
                    "skin_colors": "dark",
                    "hair_colors": "unknown",
                    "eye_colors": "blue, indigo",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/46/",
                    "language": "unknown"
                },
                {
                    "name": "Iktotchi",
                    "classification": "unknown",
                    "designation": "sentient",
                    "average_height": "180",
                    "skin_colors": "pink",
                    "hair_colors": "none",
                    "eye_colors": "orange",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/47/",
                    "language": "Iktotchese"
                },
                {
                    "name": "Quermian",
                    "classification": "mammal",
                    "designation": "sentient",
                    "average_height": "240",
                    "skin_colors": "white",
                    "hair_colors": "none",
                    "eye_colors": "yellow",
                    "average_lifespan": "86",
                    "homeworld": "https://swapi.dev/api/planets/48/",
                    "language": "Quermian"
                },
                {
                    "name": "Kel Dor",
                    "classification": "unknown",
                    "designation": "sentient",
                    "average_height": "180",
                    "skin_colors": "peach, orange, red",
                    "hair_colors": "none",
                    "eye_colors": "black, silver",
                    "average_lifespan": "70",
                    "homeworld": "https://swapi.dev/api/planets/49/",
                    "language": "Kel Dor"
                },
                {
                    "name": "Chagrian",
                    "classification": "amphibian",
                    "designation": "sentient",
                    "average_height": "190",
                    "skin_colors": "blue",
                    "hair_colors": "none",
                    "eye_colors": "blue",
                    "average_lifespan": "unknown",
                    "homeworld": "https://swapi.dev/api/planets/50/",
                    "language": "Chagria"
                }
            ]
        }
    }
}
const planetSuccessResponse: any = {
    "data": {
        "total_planets": 60,
        "global_galaxy_population": "149,000,000,000"
    }
}

describe('JediService TESTS', () => {
    beforeAll( () => {
        jediService = new JediService();
    })

    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('luke has 2 starships', () => {
        const url = "https://swapi.dev/api/people/1"
        moxios.stubRequest(url, {
            status: 200,
            response: successfulStarshipsResponse
        });

        axios.get(url).then(response => {
            expect(response.data.data.luke.starships.length).toBe(2);
        })

        let onFulfilled = sinon.spy();
        axios.get(url).then(onFulfilled);

        moxios.wait(() => {
            expect(onFulfilled).toEqual(successfulStarshipsResponse);
        })

        moxios.wait(() => {
            expect(onFulfilled.called).toBeTruthy();
        })
    });

    it('phantom menace has 20 species', () => {
        moxios.stubRequest('http://localhost:4200/v1/film/4/species', {
            status: 200,
            response: phantomMenaceSpeciesSuccessResponse
        });

        let onFulfilled = sinon.spy();
        axios.get('http://localhost:4200/v1/film/4/species').then(onFulfilled);

        moxios.wait(() => {
            expect(onFulfilled).toEqual(successfulStarshipsResponse);
            expect(successfulStarshipsResponse.data.film.species.length).toBe(20)
        })
    });

    it('there are 60 planets, and a total of 149 trillion galaxy inhabitants', () => {
        moxios.stubRequest('http://localhost:4200/v1/galaxy/planets', {
            status: 200,
            response: planetSuccessResponse
        });

        let onFulfilled = sinon.spy();
        axios.get('http://localhost:4200/v1/galaxy/planets').then(onFulfilled);

        moxios.wait(() => {
            expect(onFulfilled).toEqual(planetSuccessResponse);
            expect(planetSuccessResponse.data.planets.length).toBe(60)
            expect(planetSuccessResponse.data.totalGalaxyPopulation).toBe(149000000000000)
        })
    })
});
