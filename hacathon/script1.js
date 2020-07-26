console.log('jakdjf');
var level=0;
var counter=0;
var k = 'randNum'; 
        let i = 0; 
        for(i = 1; i < 5; i++) { 
            eval('var ' + k + i + '= ' + Math.floor((Math.random() * 9) + 1) + ';'); 
        } 
        console.log("value1=" + randNum1); 
        console.log("value2=" + randNum2); 
        console.log("value3=" + randNum3); 
        console.log("value4=" + randNum4);

        document.getElementById("domrandCircle1").innerText = randNum1;
        document.getElementById("domrandCircle2").innerText = randNum2;
        document.getElementById("domrandCircle3").innerText = randNum3;
        document.getElementById("domrandCircle4").innerText = randNum4;
        const randomArr = [randNum1, randNum2, randNum3, randNum4];
        var z=0;
        function submit(){
            
            counter=0;
           for(let i=0;i<4;i++){
            
               let inputNode = document.getElementById("input"+z+"Value5"+(i+1));
               console.log("input"+z+"Value5"+(i+1));
               console.log(inputNode)
               let inputt51=parseInt(inputNode.value);
               //console.log(inputt51);
               
            if(randomArr[i] === inputt51 ){
               inputNode.style.backgroundColor = "green";
               counter++;
               console.log("counter=",counter);
               
            }else if( randomArr.includes(inputt51)){
                inputNode.style.backgroundColor = "orange"; 
            }else {
                inputNode.style.backgroundColor = "red"; 

            }
            inputNode.disabled = true;
            
         }
         if(z<4){
            if(counter<4){
             z++;

              let tble = document.createElement("table");
              tble.setAttribute("class","table");
               for (let i = 0; i < 1; i++) {
                 let trr = document.createElement("tr");
          
                  for (let j = 0; j < 4; j++) {
                    let tdd = document.createElement("td");
                    let tdinput = document.createElement("input");
                    tdinput.setAttribute("class","input1Circle1");
                    tdinput.setAttribute("type","text");
                    tdinput.setAttribute("id","input"+z+"Value5"+(j+1));
                    tdinput.setAttribute("maxlength","1");
                    
            
                     tdd.appendChild(tdinput);
                     trr.appendChild(tdd);
                   }
                  tble.appendChild(trr);
               }
              document.body.appendChild(tble);
            }
            else{
             
                document.getElementById('Result').value = "you won the Match";
            }
         } else{
             
            alert("You lost please refresh and start  again!!!")
        }
        
    
         console.log("z=", z);
        }

  

  function generate_table(){
    console.log("tablez=", z);
    let tble = document.createElement("table");
    tble.setAttribute("class","table");
     for (let i = 0; i < 1; i++) {
       let trr = document.createElement("tr");
  
        for (let j = 0; j < 4; j++) {
            let tdd = document.createElement("td");
            let tdinput = document.createElement("input");
            tdinput.setAttribute("class","input1Circle1");
            tdinput.setAttribute("type","text");
            tdinput.setAttribute("id","input"+z+"Value5"+(j+1));
            tdinput.setAttribute("maxlength","1");
            
    
        tdd.appendChild(tdinput);
        trr.appendChild(tdd);
      }
      tble.appendChild(trr);
    }
   
   
    document.body.appendChild(tble);
  }
