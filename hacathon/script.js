
 let mainDiv = document.createElement("div");
 mainDiv.setAttribute("class","outerDiv");
 document.body.append(mainDiv);

 let mainDivstyle = document.querySelector(".outerDiv");
 mainDivstyle.style.width="100%";
 mainDivstyle.style.height="550px";
 mainDivstyle.style.margin="0 auto";
 mainDivstyle.style.postion="relative";
 mainDivstyle.style.top="40%";
 mainDivstyle.style.backgroundColor="cyan";


 let mainDiv2 = document.createElement("div");
 mainDiv2.setAttribute("class","outerDiv1");
 mainDiv.appendChild(mainDiv2);

 let mainDiv2style = document.querySelector(".outerDiv1");
 mainDiv2style.style.width="60%";
 mainDiv2style.style.height="550px";
 mainDiv2style.style.margin="0 auto";
 mainDiv2style.style.backgroundImage="linear-gradient(45deg, red, blue)";
 mainDiv2style.style.postion="absolute";
 mainDiv2style.style.top="40%";

 let randomCircle = document.createElement("span");
 mainDiv2.setAttribute("class","outerDiv1");
 mainDiv.appendChild(mainDiv2);

 let mainDiv2style = document.querySelector(".outerDiv1");
 mainDiv2style.style.width="60%";
 mainDiv2style.style.height="550px";
 mainDiv2style.style.margin="0 auto";
 mainDiv2style.style.backgroundImage="linear-gradient(45deg, red, blue)";
 mainDiv2style.style.postion="absolute";
 mainDiv2style.style.top="40%";

<td><input class="input1Circle1" type="text" id="inputValuet51" maxlength="1"></td>


 function generate_table() {

    let tble = document.createElement("table");
     for (let i = 0; i < 5; i++) {
       let trr = document.createElement("tr");
  
        for (let j = 0; j < 4; j++) {
        
        let tdd = document.createElement("td");
        let tdinput = document.createElement("input");
        input.setAttribute("class","input1Circle1");
        input.setAttribute("type","text");
        input.setAttribute("id","inputValuet51");
        input.setAttribute("maxlength","1");

        tdd.appendChild(tdinput);
        trr.appendChild(tdd);
      }
      tble.appendChild(trr);
    }
   
    body.appendChild(tble);
  }






  ================
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
    
        function submit(){
        
         
           for(let i=0;i<4;i++){
            counter=0;
               let inputNode = document.getElementById("inputValue5"+(i+1));
               console.log(inputNode);
               let inputt51=parseInt(inputNode.value);
               console.log(inputt51);
               
            if(randomArr[i] === inputt51 ){
               inputNode.style.backgroundColor = "green";
               counter++;
               console.log(counter);
               
            }else if( randomArr.includes(inputt51)){
                inputNode.style.backgroundColor = "orange"; 
            }else {
                inputNode.style.backgroundColor = "red"; 

            }
            inputNode.disabled = true;
            
         }
         if(counter<4){
         generate_table();
         }
        }

        
        function generate_table() {

            let tble = document.createElement("table");
            tble.setAttribute("class","table");
             for (let i = 0; i < 1; i++) {
               let trr = document.createElement("tr");
          
                for (let j = 0; j < 4; j++) {
                    let tdd = document.createElement("td");
                    let tdinput = document.createElement("input");
                    tdinput.setAttribute("class","input1Circle1");
                    tdinput.setAttribute("type","text");
                    tdinput.setAttribute("id","inputValue5"+(j+1));
                    tdinput.setAttribute("maxlength","1");
                    
            
                tdd.appendChild(tdinput);
                trr.appendChild(tdd);
              }
              tble.appendChild(trr);
            }
           
           
            document.body.appendChild(tble);
          }

  
