const crypto = require("crypto");

module.exports = {
  add(request, response) {
    const {a, b} = request.body;

    var add = parseFloat(a) + parseFloat(b);

    return response.json({add});
  },

  sub(request, response){
    const {a, b} = request.body;

    var sub = parseFloat(a) - parseFloat(b);
    
    return response.json({sub});
  },

  multi(request, response){
    const {a, b} = request.body;

    var multi = parseFloat(a) * parseFloat(b);
    
    return response.json({multi});
  },

  div(request, response){
    const {a, b} = request.body;

    var div = parseFloat(a) / parseFloat(b);
    
    return response.json({div});
  }
};
