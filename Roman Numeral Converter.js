function convertToRoman(num) {
  let sum = ""
  let x1000 = parseInt(num/1000);
  let x900  = parseInt((num - x1000*1000)/900)
  let x500  = parseInt((num - x1000*1000 - x900*900)/500);
  let x100  = parseInt((num - x1000*1000 - x900*900 - x500*500)/100);
  let x90   = parseInt((num - x1000*1000 - x900*900 - x500*500 - x100*100)/90)
  let x50   = parseInt((num - x1000*1000 - x900*900 - x500*500 - x100*100 -x90*90)/50);
  let x10   = parseInt((num - x1000*1000 - x900*900 - x500*500 - x100*100 -x90*90 - x50*50)/10);
  let x9    = parseInt((num - x1000*1000 - x900*900 - x500*500 - x100*100 -x90*90 - x50*50 - x10*10)/9);
  let x5    = parseInt((num - x1000*1000 - x900*900 - x500*500 - x100*100 -x90*90 - x50*50 - x10*10 -x9*9)/5);
  let x1    = parseInt(num - x1000*1000 - x900*900 - x500*500 - x100*100 -x90*90 - x50*50 - x10*10 - x9*9 - x5*5);

    while(num>0){
      if(x1000){
        for(let i=0; i<x1000; i++){
            sum +="M";
            num -= 1000
            x1000 -=1;}
      }else if(x900){
            sum +="CM";
            num -= 900;
            x900 -= 1;
      }else if(x500){
            sum +="D";
            num -= 500
            x500 -= 1;
      }else if(x100){
        if(x100 == 4){
            sum +="CD";
            num -= 400
            x100 -= 4;
        }else{
          for(let i=0; i<x100; i++){
            sum +="C";
            num -= 100;
            x100 -= 1;}}
      }else if(x90){
            sum += "XC";
            num -= 90;
            x90 -= 1;
      }else if(x50){
            sum +="L"
            num -= 50
            x50 -= 1;
      }else if(x10){
         if(x10 == 4){
            sum +="XL";
            num -= 40
            x10 -= 4;
        }else{
          for(let i=0; i<x10; i++){
            sum +="X";
            num -= 10;
            x10 -= 1}}
      }else if(x9){
            sum +="IX";
            num -= 9;
            x9 -=1;
      }else if(x5){
              sum += "V"
              num -= 5
              x5 -= 1;
      }else if(x1){
        if(x1 == 4){
            sum +="IV";
            num -= 40
            x1 -= 4;
        }else{
          for(let i=0; i<x1; i++){
            sum +="I";
            num -= 1;
            x1 -=1;}}     
  }
    }
   return sum;
}
