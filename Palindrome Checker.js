function palindrome(str) {
  let reg = /\W|_/gi;
  let s = str.replace(reg,"").toLowerCase();
  for(let i=0; i<s.length/2; i++){
    if(s[i] !== s[s.length-1-i]){
      return false;
    };
  };

  return true;
}