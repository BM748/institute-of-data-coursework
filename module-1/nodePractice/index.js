var Sentiment = require('sentiment')
var sentiment = new Sentiment()
var result = sentiment.analyze('Cats are boxers with there paws.');
console.dir(result);