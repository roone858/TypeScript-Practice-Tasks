interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface Data {
  location: Location;
  current: Current;
}

const key = "44f227092e41410aaf8173610231606";

const getData = async (url: string): Promise<Data> => {
  const res = await fetch(url);
  const result = await res.json();
  return result;
};

const displayData = async () => {
  const given_city = document.getElementById("city") as HTMLInputElement;
  const Api_url: string = `http://api.weatherapi.com/v1/current.json?key=44f227092e41410aaf8173610231606&q=${given_city?.value}&aqi=no`;

  const result = await getData(Api_url);
  const city = document.getElementById("cityForm");
  if (city) city.innerHTML = String(result.location.name);
  const country = document.getElementById("country");
  if (country) country.innerHTML = String(result.location.country);
  const time = document.getElementById("time");
  if (time) time.innerHTML = String(result.location.localtime);
  const temp = document.getElementById("temp");
  if (temp) temp.innerHTML = String(result.current.feelslike_c) + " C";
};

document.getElementById("submit")?.addEventListener("click", () => {
  displayData();
});
