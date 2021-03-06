const fetchData = require('../utils/fetchData.js')
const API = 'https://rickandmortyapi.com/api/character/'

const request = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(character.gender)
        console.log(origin.dimension)
        
    } catch(err) {
        console.error(err)
    }
}

console.log('Before')
request(API)
console.log('After')
