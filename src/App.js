import { useState, useEffect } from 'react';
import Cards from './Components/Cards';
import Map from './Components/Map';

import './styles.css';
import logo from './images/coronavirus.svg';
import Footer from './Components/Footer';

function App() {
  const [covid, setCovid] = useState({});
  const [lat, setLat] = useState('61');
  const [long, setLong] = useState('25');

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('Finland');


  useEffect(() => {
    async function getCountries() {
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const data = await response.json();
            setItems(data.map((name) => name.country));
            setLoading(false);
        }
        getCountries()
  }, [])

  useEffect(() => {
    const fetchData = async (country) => {
    fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
      .then((res) => res.json())
      .then((data) => setCovid(data))
  }
    fetchData(value)
  }, [value])

  useEffect(() => {
    if (covid.country !== undefined) {
      setLat(covid.countryInfo.lat)
      setLong(covid.countryInfo.long)
    }
    console.log(lat)
    console.log(long)
  }, [covid])

  return (
    <div className="wrapper">
      <h1>Covid Tracker <img className="logo" src={logo} alt=""/></h1>
      <select disabled={loading} value={value} onChange={e => setValue(e.currentTarget.value)}>
            {items.map((country) => (
                <option value={country} key={country}>
                    {country}
                </option>
            ))}
        </select>
        <h2 className="country-name">{covid.country}</h2>
      <div className="container">
        <Cards titleToday="Cases Today" titleTotal="Total Cases" today={covid.todayCases} total={covid.cases} />
        <Cards titleToday="Deaths Today" titleTotal="Total Deaths" today={covid.todayDeaths} total={covid.deaths} />
        <Cards titleToday="Recoveries Today" titleTotal="Total Recoveries" today={covid.todayRecovered} total={covid.recovered} />
      </div>
      <Map country={covid.country} lat={lat} long={long} active={covid.active} critical={covid.critical} />
      <Footer />
    </div>

  );
}

export default App;
