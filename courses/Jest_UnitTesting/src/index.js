const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires'];

const randomString = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

module.exports = {
  randomString,
};
