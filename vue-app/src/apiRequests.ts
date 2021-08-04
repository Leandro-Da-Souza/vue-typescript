import axios from 'axios';

interface CharacterModel {
    name: string;
}

async function getCharacter(): Promise<CharacterModel> {
    const url = 'http://localhost:5000/character';
    const resp = await axios.get<CharacterModel>(url);
    console.log(resp);
    return resp.data;
}

export { CharacterModel, getCharacter }
