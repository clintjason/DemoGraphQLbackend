
const getRandomImageURL = async () => {
  try {
    const response = await fetch('https://source.unsplash.com/random/300x250');
    const imageUrl = response.url;
    return imageUrl;
  } catch (error) {
    console.error('Error fetching random image:', error);
    return error;
  }
};

const getRandomCurrencyCode = () => {
  const currencyCodes = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'];
  const randomIndex = Math.floor(Math.random() * currencyCodes.length);
  return currencyCodes[randomIndex];
};

module.exports = {
  getRandomImageURL,
  getRandomCurrencyCode
}