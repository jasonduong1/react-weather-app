import "./current-weather.css";

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{capitalize(data.weather[0].description)}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Lows</span>
            <span className="parameter-value">{Math.round(data.main.temp_min)}°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Highs</span>
            <span className="parameter-value">{Math.round(data.main.temp_max)}°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} mph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          {/* <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} mb</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
