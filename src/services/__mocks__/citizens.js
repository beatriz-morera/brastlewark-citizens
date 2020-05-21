export function getCitizens() {
  return import('./fixtures/citizens.json').then((rs) => rs.default);
}
