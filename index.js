var _ = require('underscore');
var redisBenchmarkParser = {
  parse : function (content) {
    var commandSplits, data = {commands: [], results:[]}, results = {};
    commandSplits = _.filter(content.split(/^.*======(.*)======/mi), function  (item) {
      return !_.isEmpty(item) && !item.match(/^.*:.*/);
    });
    for(var i = 0; i < commandSplits.length; i++){
      (i % 2 === 0 )? data.commands.push(commandSplits[i]) :data.results.push(commandSplits[i])
    }
    for(var i = 0; i < data.commands.length; i++){
      var requestMatches = data.results[i].match(/(\d*) requests completed in (.*) seconds/i);
      var maxRequestsMatches = data.results[i].match(/100.00% <= (.*) milliseconds/i);
      var rpsMatches = data.results[i].match(/(.*) requests per second/i);
      results[data.commands[i].trim()] = {requests: requestMatches[1], totalTime: requestMatches[2], max: maxRequestsMatches[1], requestPerSecond: rpsMatches[1]};
    }
    return results;
  },
  compare: function(){
    var contents = _.toArray(arguments)
    
  }
};    

module.exports = redisBenchmarkParser;