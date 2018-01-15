const prompt = require('prompt');

const promptSchema = require('./prompt-search-term-schema');
const sendRequestFunc = require('./send-request-dadjoke-api');
const randomElement = require('./random-element');
const appendToFile = require('./append-to-file');

prompt.start();

prompt.get(promptSchema, (error, result) => {
  if(error){
    console.log('Error while getting the prompt for search term: ' + error);
  }
  else{
    sendRequestFunc(result.searchTerm, (jokes) => {
      if(jokes){
        const joke = randomElement(jokes);
        if (joke) {
          console.log(joke);
          appendToFile("jokes.txt", joke);
        }
        else{
          // We didn't any joke with the searchTerm
          console.log("Couldn't find any jokes with that search term.");
        }
      }
    });  
  }
});

