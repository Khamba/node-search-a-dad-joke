const fs = require('fs');

module.exports = (fileName, text) => {
  fs.appendFile(fileName, text + "\n\n", (error) => {
    if(error){
      console.log('There was an error saving to file' + fileName + ': ' + error);
    }
    else{
      console.log('Saved to file: ' + fileName);
    }
  });
}