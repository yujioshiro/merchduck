const process = require('process')

const axios = require('axios')
const qs = require('qs')

// const divToChange = document.getElementById("consumed-data");

const handler = async function (event, context) {

  const param1 = event.queryStringParameters.param1;

  // Call the API with the parameters
  // const response = await axios.get(`https://api.example.com?param1=${param1}`);

  // apply our function to the queryStringParameters and assign it to a variable
  // const API_PARAMS = qs.stringify(event.queryStringParameters)
  // console.log('API_PARAMS', API_PARAMS)
  // Get env var values defined in our Netlify site UI

  // The keys stored in Netlify will be grabbed here
  const bing = process.env.HOW_MANY_STARS_ON_THE_AMERICAN_FLAG;
  const bong = process.env.GODDAMN_FORTY_SEVEN;
  const URL = 'https://api.ssactivewear.com/v2/products/';

  console.log('Constructed URL is ...', URL)

  try {
    const { data } = await axios.get(URL + param1, {
      // The API endpoint is a login page, we need to pass
      // the username and password with our URL.
      auth: {
        username: bing,
        password: bong
      }
    });
    // divToChange.innerHTML = data[0]["sku"];
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
    
  } catch (error) {
    const { data, headers, status, statusText } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
