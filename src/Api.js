
const API_KEY = 'da174018dcb1b418b1faeffba039b9a4';
const HASH = '61b9ca55fa349008b1e56ecd3c30acce'; 

const getAllCharacters = ()=> {
    return fetch(`https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=${API_KEY}&hash=${HASH}`)
    .then(res=> res.json())
}

export default getAllCharacters;