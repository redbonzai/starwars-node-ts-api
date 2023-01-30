import axios from "axios";
import moxios from 'moxios';
import sinon from "sinon";
import {JediService} from "../../services/jedi.service";

import * as constants from "constants";
import {jediUrlById} from "../../integrations/swapi/constants";


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

    it('luke has starships', () => {
        const url = "https://swapi.dev/api/people/1"
        moxios.stubRequest('https://swapi.dev/api/people/1', {
            status: 200,
            response: {
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
        });

        let onFulfilled = sinon.spy();
        axios.get(url).then(onFulfilled);

        moxios.wait(() => {
            expect(onFulfilled.called).toBeTruthy();
        })

    });
});
