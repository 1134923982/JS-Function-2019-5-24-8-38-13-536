function reverseString(message){
  message=message.split('').reverse().join('');
  return message;
}
reverseString('hello'); // should return 'olleh'
