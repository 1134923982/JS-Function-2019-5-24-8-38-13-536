function palindrome(message){
  var str=message.split('').reverse().join('');
  if(str===message){
    return true;
  }
  return false;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
