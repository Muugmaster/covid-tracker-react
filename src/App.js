import { useState, useEffect } from 'react';
import Cases from './Components/Cases';
import Deaths from './Components/Deaths';
import Recover from './Components/Recover';

import './styles.css';

function App() {
  const [covid, setCovid] = useState({});

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

  return (
    <div className="wrapper">
      <h1>{covid.country}</h1>
      <select disabled={loading} value={value} onChange={e => setValue(e.currentTarget.value)}>
            {items.map((country) => (
                <option value={country} key={country}>
                    {country}
                </option>
            ))}
        </select>
      <div className="container">
        <Cases total={covid.cases} today={covid.todayCases} />
        <Deaths total={covid.deaths} today={covid.todayDeaths} />
        <Recover total={covid.recovered} today={covid.todayRecovered} />
      </div>
    </div>
  );
}

export default App;
