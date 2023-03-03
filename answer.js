var capitals = function (word) {
  const newarr = []
  const result = word.split("").map(x=> x=== x.toUpperCase()?newarr.push(word.split("").indexOf(x)):newarr)
  return newarr
};

var capitals = function (word) {
  var caps = [];
	for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }
