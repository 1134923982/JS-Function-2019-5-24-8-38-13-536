
function countWords(message){
  var str=message.split(' ');
  return str.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5
