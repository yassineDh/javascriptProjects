function checkCashRegister(price, cash, cid) {
  let ch = cash - price;
  let change =ch.toFixed(2)
  console.log(change)

  let tab = [];
  let coef = [];
  let res = 0;
  let sta = "";
  let arr = [];
  let t  = [];

  for(let i=0; i<cid.length; i++){
    tab[i] = cid[cid.length-1-i][1];
    if(tab[i] == 0){
      coef[i] = 0;
    }else{
      coef[i] = 1;
    }
  }; 

  for(let i=0; i<cid.length; i++){
    res += cid[i][1];
  };
 console.log(res)
 
    if (res < change ){
    sta = "INSUFFICIENT_FUNDS";
    }else if(res == change){
    sta = "CLOSED";
    }else if (res > change){
    sta = "OPEN"
     };

  console.log(sta);
  let x001,x005,x01,x025,x1,x5,x10,x20,x100;
  let p001=0,p005=0,p01=0,p025=0,p1=0,p5=0,p10=0,p20=0,p100=0;

  if(res > change){
    while(change > 0){
      console.log(change)
    let subarr = [];
    x100 = parseInt( coef[0]*change/100);
    x20  = parseInt((coef[1]*change - coef[0]* x100*100)/20);
    x10  = parseInt((coef[2]*change - coef[0]*x100*100 - coef[1]*x20*20)/10);
    x5   = parseInt((coef[3]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10)/5);
    x1   = parseInt((coef[4]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5));
    x025 = parseInt((coef[5]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1)/0.25);
    x01  = parseInt((coef[6]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1 - coef[5]*x025*0.25)/0.1);
    x005 = parseInt((coef[7]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1 - coef[5]*x025*0.25 - coef[6]*x01*0.1)/0.05);
    x001 = parseInt((coef[8]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1 - coef[5]*x025*0.25 - coef[6]*x01*0.1 - coef[7]*x005*0.005)/0.01);

     if(!x100 && !x20 && !x10 && !x5 && !x1 && !x025 && !x01 && !x005 && !x001 && change > 0 ){
        sta = "INSUFFICIENT_FUNDS";
        arr =[];
        console.log("im here")
        break; 
    }

    if(x100 && tab[0]){
      if(tab[0] >= change){       
        p100 = x100*100;
        change = (change -p100).toFixed(2);
        tab[0] = tab[0] - p100;
        if(tab[0] == 0){
        coef[0] = 0;
        }
        subarr.push("ONE HUNDRED");
        subarr.push(p100);
      }else{
        p100 = tab[0];
        change = (change - tab[0]).toFixed(2);
        tab[0] = 0;
        if(tab[0] == 0){
        coef[0] = 0;
        }
        subarr.push("ONE HUNDRED");
        subarr.push(p100);
      }
    }else if(x20 && tab[1]){
      if(tab[1] >= change){       
        p20 = x20*20;
        change =( change - p20).toFixed(2);
        tab[1] = tab[1] - p20;
        if(tab[1] == 0){
         coef[1] = 0;
         }
        subarr.push("TWENTY");
        subarr.push(p20);
      }else{
        p20 = tab[1];
        change = (change - tab[1]).toFixed(2);
        tab[1] = 0;
        if(tab[1] == 0){
         coef[1] = 0;
         }
        subarr.push("TWENTY");
        subarr.push(p20);
      }
    }else if(x10 && tab[2]){
      if(tab[2] >= change){       
        p10 = x10*10;
        change = (change - p10).toFixed(2);
        tab[2] = tab[2] - p10;
        if(tab[2] == 0){
         coef[2] = 0;
         }
        subarr.push("TEN");
        subarr.push(p10);
      }else{
        p10 = tab[2];
        change = (change - tab[2]).toFixed(2);
        tab[2] =0;
        if(tab[2] == 0){
        coef[2] = 0;
        }
        subarr.push("TEN");
        subarr.push(p10);
      }
    }else if(x5 && tab[3]){
      if(tab[3] >= change){       
        p5 = x5*5;
        change = (change - p5).toFixed(2);
        tab[3] = tab[3] - p5;
        if(tab[3] == 0){
        coef[3] = 0;
        }
        subarr.push("FIVE");
        subarr.push(p5);
      }else{
        p100 = tab[3];
        change = (change - tab[3]).toFixed(2);
        tab[3] = 0;
        if(tab[3] == 0){
        coef[3] = 0;
        }
        subarr.push("FIVE");
        subarr.push(p5);
      }
    }else if(x1 && tab[4]){
      if(tab[4] >= change){       
        p1 = x1*1;
        change = (change - p1).toFixed(2);
        tab[4] = tab[4] - p1;
        if(tab[4] == 0){
        coef[4] = 0;
        }
        subarr.push("ONE");
        subarr.push(p1);
      }else{
        p1 = tab[4];
        change = (change - tab[4]).toFixed(2);
        tab[4] = 0;
        if(tab[4] == 0){
        coef[4] = 0;
        }
        subarr.push("ONE");
        subarr.push(p1);
      }
    }else if(x025 && tab[5]){
      if(tab[5] >= change){       
        p025 = x025*0.25;
        change = (change - p025).toFixed(2);
        tab[5] = tab[5] - p025;
        if(tab[5] == 0){
        coef[5] = 0;
        }
        subarr.push("QUARTER");
        subarr.push(p025);
      }else{
        p025 = tab[5];
        change = (change - tab[5]).toFixed(2);
        tab[5] = 0;
        if(tab[5] == 0){
        coef[5] = 0;
        }
        subarr.push("QUARTER");
        subarr.push(p025);
      }
    }else if(x01 && tab[6]){
      if(tab[6] >= change){       
        p01 = x01*0.1;
        change = (change - p01).toFixed(2);
        tab[6] = tab[6] - p01;
        if(tab[6] == 0){
        coef[6] = 0;
        }
        subarr.push("DIME");
        subarr.push(p01);
      }else{
        p01 = tab[6];
        change =( change - tab[6]).toFixed(2);
        tab[6] = 0;
        if(tab[6] == 0){
        coef[6] = 0;
        }
        subarr.push("DIME");
        subarr.push(p01);
      }
    }else if(x005 && tab[7]){
      if(tab[7] >= change){       
        p005 = x005*0.05;
        change = (change -p005).toFixed(2);
        tab[7] = tab[7] - p005;
        if(tab[7] == 0){
        coef[7] = 0;
        }
        subarr.push("NICKEL");
        subarr.push(p005);
      }else{
        p005 = tab[7];
        change = (change - tab[7]).toFixed(2);
        tab[7] = 0;
        if(tab[7] == 0){
        coef[7] = 0;
        }
        subarr.push("NICKEL");
        subarr.push(p005);
    }
      }else if(x001 && tab[8]){
      if(tab[8] >= change){       
        p001 = x001*0.01;
        change = (change - p001).toFixed(2);
        tab[8] = tab[8] - p001;
        if(tab[8] == 0){
        coef[8] = 0;
        }
        subarr.push("PENNY");
        subarr.push(p001);
      }else{
        p001 = tab[8];
        change = (change - tab[8]).toFixed(2);
        tab[8] = 0;
        if(tab[8] == 0){
        coef[8] = 0;
        }
        subarr.push("PENNY");
        subarr.push(p001);
      }
      }
      arr.push(subarr);  
      console.log(arr)
  }
  
  };
  if(res == change){
        while(change > 0){
      console.log(change)
    let subarr = [];
    x100 = parseInt( coef[0]*change/100);
    x20  = parseInt((coef[1]*change - coef[0]* x100*100)/20);
    x10  = parseInt((coef[2]*change - coef[0]*x100*100 - coef[1]*x20*20)/10);
    x5   = parseInt((coef[3]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10)/5);
    x1   = parseInt((coef[4]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5));
    x025 = parseInt((coef[5]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1)/0.25);
    x01  = parseInt((coef[6]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1 - coef[5]*x025*0.25)/0.1);
    x005 = parseInt((coef[7]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1 - coef[5]*x025*0.25 - coef[6]*x01*0.1)/0.05);
    x001 = parseInt((coef[8]*change - coef[0]*x100*100 - coef[1]*x20*20 - coef[2]*x10*10 - coef[3]*x5*5 - coef[4]*x1*1 - coef[5]*x025*0.25 - coef[6]*x01*0.1 - coef[7]*x005*0.005)/0.01);

    if(x100 && tab[0]){
      if(tab[0] >= change){       
        p100 = x100*100;
        change = (change -p100).toFixed(2);
        tab[0] = tab[0] - p100;
        if(tab[0] == 0){
        coef[0] = 0;
        }
        subarr.push("ONE HUNDRED");
        subarr.push(p100);
      }else{
        p100 = tab[0];
        change = (change - tab[0]).toFixed(2);
        tab[0] = 0;
        if(tab[0] == 0){
        coef[0] = 0;
        }
        subarr.push("ONE HUNDRED");
        subarr.push(p100);
      }
    }else if(x20 && tab[1]){
      if(tab[1] >= change){       
        p20 = x20*20;
        change =( change - p20).toFixed(2);
        tab[1] = tab[1] - p20;
        if(tab[1] == 0){
         coef[1] = 0;
         }
        subarr.push("TWENTY");
        subarr.push(p20);
      }else{
        p20 = tab[1];
        change = (change - tab[1]).toFixed(2);
        tab[1] = 0;
        if(tab[1] == 0){
         coef[1] = 0;
         }
        subarr.push("TWENTY");
        subarr.push(p20);
      }
    }else if(x10 && tab[2]){
      if(tab[2] >= change){       
        p10 = x10*10;
        change = (change - p10).toFixed(2);
        tab[2] = tab[2] - p10;
        if(tab[2] == 0){
         coef[2] = 0;
         }
        subarr.push("TEN");
        subarr.push(p10);
      }else{
        p10 = tab[2];
        change = (change - tab[2]).toFixed(2);
        tab[2] =0;
        if(tab[2] == 0){
        coef[2] = 0;
        }
        subarr.push("TEN");
        subarr.push(p10);
      }
    }else if(x5 && tab[3]){
      if(tab[3] >= change){       
        p5 = x5*5;
        change = (change - p5).toFixed(2);
        tab[3] = tab[3] - p5;
        if(tab[3] == 0){
        coef[3] = 0;
        }
        subarr.push("FIVE");
        subarr.push(p5);
      }else{
        p100 = tab[3];
        change = (change - tab[3]).toFixed(2);
        tab[3] = 0;
        if(tab[3] == 0){
        coef[3] = 0;
        }
        subarr.push("FIVE");
        subarr.push(p5);
      }
    }else if(x1 && tab[4]){
      if(tab[4] >= change){       
        p1 = x1*1;
        change = (change - p1).toFixed(2);
        tab[4] = tab[4] - p1;
        if(tab[4] == 0){
        coef[4] = 0;
        }
        subarr.push("ONE");
        subarr.push(p1);
      }else{
        p1 = tab[4];
        change = (change - tab[4]).toFixed(2);
        tab[4] = 0;
        if(tab[4] == 0){
        coef[4] = 0;
        }
        subarr.push("ONE");
        subarr.push(p1);
      }
    }else if(x025 && tab[5]){
      if(tab[5] >= change){       
        p025 = x025*0.25;
        change = (change - p025).toFixed(2);
        tab[5] = tab[5] - p025;
        if(tab[5] == 0){
        coef[5] = 0;
        }
        subarr.push("QUARTER");
        subarr.push(p025);
      }else{
        p025 = tab[5];
        change = (change - tab[5]).toFixed(2);
        tab[5] = 0;
        if(tab[5] == 0){
        coef[5] = 0;
        }
        subarr.push("QUARTER");
        subarr.push(p025);
      }
    }else if(x01 && tab[6]){
      if(tab[6] >= change){       
        p01 = x01*0.1;
        change = (change - p01).toFixed(2);
        tab[6] = tab[6] - p01;
        if(tab[6] == 0){
        coef[6] = 0;
        }
        subarr.push("DIME");
        subarr.push(p01);
      }else{
        p01 = tab[6];
        change =( change - tab[6]).toFixed(2);
        tab[6] = 0;
        if(tab[6] == 0){
        coef[6] = 0;
        }
        subarr.push("DIME");
        subarr.push(p01);
      }
    }else if(x005 && tab[7]){
      if(tab[7] >= change){       
        p005 = x005*0.05;
        change = (change -p005).toFixed(2);
        tab[7] = tab[7] - p005;
        if(tab[7] == 0){
        coef[7] = 0;
        }
        subarr.push("NICKEL");
        subarr.push(p005);
      }else{
        p005 = tab[7];
        change = (change - tab[7]).toFixed(2);
        tab[7] = 0;
        if(tab[7] == 0){
        coef[7] = 0;
        }
        subarr.push("NICKEL");
        subarr.push(p005);
    }
      }else if(x001 && tab[8]){
      if(tab[8] >= change){       
        p001 = x001*0.01;
        change = (change - p001).toFixed(2);
        tab[8] = tab[8] - p001;
        if(tab[8] == 0){
        coef[8] = 0;
        }
        subarr.push("PENNY");
        subarr.push(p001);
      }else{
        p001 = tab[8];
        change = (change - tab[8]).toFixed(2);
        tab[8] = 0;
        if(tab[8] == 0){
        coef[8] = 0;
        }
        subarr.push("PENNY");
        subarr.push(p001);
      }
      }
      arr.push(subarr);  
      console.log(arr)
  }
      for(let i=0; i<cid.length; i++){
        if(cid[i][1] == 0){
          arr.push(cid[i ])
        }
      }
  }
  let objc = {};
  objc.status = sta;
  objc.change = arr;

  return objc;
}