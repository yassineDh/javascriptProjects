function telephoneCheck(str) {
  // Good luck!
  let reg =/[^-|\s|"("|")"|\d]/g;
  let reg9 =/\?/;
  let st = str.replace(/\W/g,"");
  function checkPar(s){
    for(let i=0; i<s.length; i++){
      if(s[i] == "("){
        if(s[i+4] != ")"){
          return true;
        }
      };
      if(s[i] == ")"){
        if(s[i-4] != "("){
          return true;
        }
      }
    }
    return false;
  }
  if(str[0] == "-"){
    return false;
  }

  if(str.length < 10 || reg.test(str) || reg9.test(str) || checkPar(str)){
    return false;};

  if(st.length == 11 ||st.length >11){
    if(st[0] != 1){
      return false;
    };
    if(st.length > 11){
      return false;
    }
  }

  console.log(st)
  return true;
}