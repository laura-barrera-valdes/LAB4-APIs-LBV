export async function data_the_starwars() {
  try {
    const arrayData = [];
    const numRandom = Math.floor(Math.random() * 7); // random until 6
    //console.log(numRandom);

    for (let i = 1; i < numRandom; i++) {
      const getData = await fetch("https://swapi.dev/api/people/" + i);
      const star = await getData.json();
      console.log(star);
      arrayData.push(star);
    }
    return arrayData;
  } catch (error) {
    console.error(error);
  }
}
