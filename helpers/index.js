const axios = require('axios');

const truncateImageUrl = (imageUrl) => {
  if (imageUrl.length > 50) {
    return imageUrl.substring(0, 50);
  }
  return imageUrl;
};

const getRandomImageURL = async () => {
  try {
    const response = await axios.get('https://picsum.photos/300/300', {
      responseType: 'arraybuffer',
    });

    const imageBuffer = Buffer.from(response.data, 'binary');
    let imageURL = `data:${response.headers['content-type']};base64,${imageBuffer.toString('base64')}`;
    console.log("The Image URL: " + imageURL);

    imageURL = truncateImageUrl(imageURL); // Truncate the imageUrl if it exceeds the maximum length

    return imageURL;
  } catch (error) {
    console.error(error);
    throw error;
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