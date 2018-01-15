// schema for the prompt of searchTerm
const schema = {
  properties: {
    searchTerm: {
      description: 'Enter a word to search for dad joke',
      type: 'string',
      pattern: /^\w+$/,
      message: 'Enter one word',
      required: true
    }
  }
}

module.exports = schema;

