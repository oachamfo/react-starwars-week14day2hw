//named export of async function getAllStarships()
export const getAllStarships = async () => {
  // make fetch request and store response
  try {
    const response = await fetch(`https://swapi.dev/api/starships`);
    // Parse JSON response into a javascript object
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
