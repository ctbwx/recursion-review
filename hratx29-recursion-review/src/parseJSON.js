var parseJSON = function(json) {
  try{
    json = new Function('return ' + json)();
  } catch(e){
    throw e;
  }
  return json;
};
