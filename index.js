const img = document.querySelector('img');
const body = document.querySelector('body');

const getWeather = async (location) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=3f9abdc46cb3432983b191345233008&q=${location}`;
  const response = await fetch(url, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData.current.condition.icon);
  // img.src = weatherData.current.condition.icon;
  body.style.backgroundImage = `url(${weatherData.current.condition.icon})`;
};

getWeather('houston');
