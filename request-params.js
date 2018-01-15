module.exports = (searchTerm) => ({
  url: "http://icanhazdadjoke.com/search",
  qs: { term: searchTerm },
  json: true
});