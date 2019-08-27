function rot13(str) { // LBH QVQ VG!
  let arr = [];
  function  isNotAlpha(c){
    let reg =/\W/;
    return reg.test(c);
  };
  for(let i=0; i<str.length; i++){
    if(!isNotAlpha(str[i])){
      let asc = str.charCodeAt(i);
      if(asc <= 77){
        arr.push(String.fromCharCode(asc+13));
      }else{
        let dis = 13-(90-asc)-1;
        arr.push(String.fromCharCode(65+dis));
      };
    }else{
      arr.push(str[i]);
    };
  }
  let fin = arr.join("");
  console.log(fin);

  return fin;
}
