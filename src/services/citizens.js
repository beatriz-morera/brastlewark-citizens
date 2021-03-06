const SERVICE_URL = process.env.REACT_APP_SERVICE_URL;

export async function getCitizens() {
  const res = await fetch(SERVICE_URL);
  const citizens = await res.json();
  return citizens.Brastlewark;
}
