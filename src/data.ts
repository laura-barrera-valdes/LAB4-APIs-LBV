export async function data_the_starwars() {
    try {
        
        const getData = await fetch("https://swapi.dev/api/people/1/").then((response) => (response.json()));
        return getData;
    } catch (error) {
        
    }
}
data_the_starwars;