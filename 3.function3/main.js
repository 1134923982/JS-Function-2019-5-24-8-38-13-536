
function alphabetSort(message){
  var str=message.split('');
  str.sort();
  str=str.join("");
  return str;
}
console.log(alphabetSort('hello'));
alphabetSort('hello'); // should return 'ehllo'
