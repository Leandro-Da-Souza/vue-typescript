import axios from 'axios';

import CharacterModel from './types/CharacterModel';

async function getCharacter(): Promise<CharacterModel> {
    const url = 'http://localhost:5000/character';
    const resp = await axios.get<CharacterModel>(url);
    console.log(resp);
    return resp.data;
}

async function getEqupiment(): Promise<any> {
    const url = 'http://localhost:5000/equipment';
    const response = await axios.get<any>(url);
    console.log(response)
    return response.data
}

export { getCharacter, getEqupiment }
