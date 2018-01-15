const request = require('request');

const reqParamsFunc = require('./request-params');

const sendRequest = (searchTerm, afterReqSent) => {
  request(reqParamsFunc(searchTerm), (error, response, body) => {

      // handle errors if any
      if(error || response.statusCode !== 200){
        console.log("There was an error fetching the joke: " + error.toString());
        return null;
      }
      else{
        // We didn't get any errors
        const jokes = body.results.map(item => item.joke);
        afterReqSent(jokes);
      }      
    }
  );
}

module.exports = sendRequest;