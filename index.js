const getWeather = async (location) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=3f9abdc46cb3432983b191345233008&q=${location}`;
  const response = await fetch(url, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
  setBackground(weatherData);
  updateText(weatherData);
};

const setBackground = (weather) => {
  const wrapper = document.querySelector('.wrapper');
  wrapper.style.backgroundImage = `url(${weather.current.condition.icon})`;
};

const updateText = (weather) => {
  const time = document.querySelector(".time");
  const condition = document.querySelector(".condition");
  const tempF = document.querySelector(".temp-F");
  const tempC = document.querySelector(".temp-C");
  const humidity = document.querySelector(".humidity");

  const weatherTime  = weather.current.last_updated.split(" ")[1];
  time.textContent = `Last updated: ${weatherTime}`;
  condition.textContent = `Condition: ${weather.current.condition.text}`;
  tempF.textContent = `Temp (\xB0F): ${weather.current.temp_f}\xB0F`;
  tempC.textContent = `Temp (\xB0FC): ${weather.current.temp_c}\xB0F`;
  humidity.textContent = `Humidity: ${weather.current.humidity}%`;
};

const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
  const search = document.querySelector('#search');
  const location = search.value;
  getWeather(location);
})