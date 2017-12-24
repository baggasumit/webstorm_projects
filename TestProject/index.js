/**
 * Created by sumit_bagga on 10/25/17.
 */

axios({
  url: 'https://query.yahooapis.com/v1/public/yql?q=select%20Name%2C%20Symbol%2C%20LastTradePriceOnly%20from%20yahoo.finance.quote%20where%20symbol%3D%22TSLA%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',

  })
  .then(function (response) {
    console.log(response.data.query.results.quote);
  })
  .catch(function (error) {
    console.log(error);
  });
