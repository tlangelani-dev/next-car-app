export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'oJOpY0BvXwmshYf0F9VAmuNV0rV5p1oHTyBjsnNt8KbKz7xiey',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers
    });
    const result = response.json();

    return result;
}
