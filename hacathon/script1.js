
var k = 'randNum'; 
    var i = 0; 
    for(i = 1; i < 5; i++) { 
        eval('var ' + k + i + '= ' + Math.floor((Math.random() * 10) + 1) + ';'); 
    } 
    console.log("value1=" + randNum1); 
    console.log("value2=" + randNum2); 
    console.log("value3=" + randNum3); 
    console.log("value4=" + randNum4);

    document.getElementById("domrandCircle1").innerText = randNum1;
    document.getElementById("domrandCircle2").innerText = randNum2;
    document.getElementById("domrandCircle3").innerText = randNum3;
    document.getElementById("domrandCircle4").innerText = randNum4;

    
for(let mmm =0;mmm<5;mmm++){
        var input1=prompt("please enter the first guss single digit value");
        var inputlen=input1.length;

        if(inputlen !==1){
            alert("you have not entered the correct value");
            input1=prompt("please enter the single digit value onl;y");
            document.getElementById("inputValu1").innerText=input1;
        
        }else{
            document.getElementById("inputValu1").innerText=input1;
        

        }

        var input2=prompt("please enter the 2nd guss single digit value");
        var inputlen=input2.length;
        if(inputlen !==1){
            alert("you have not entered the correct value");
            input2=prompt("please enter the single digit value onl;y");
            document.getElementById("inputValu2").innerText=input2;
            
        }else{
            document.getElementById("inputValu2").innerText=input2;
            
        }

        var input3=prompt("please enter the 3rd guss single digit value");
        var inputlen=input3.length;
        if(inputlen !==1){
            alert("you have not entered the correct value");
            input3=prompt("please enter the single digit value onl;y");
            document.getElementById("inputValu3").innerText=input3;
        
        }else{
            document.getElementById("inputValu3").innerText=input3;
            
        }

        var input4=prompt("please enter the 4th guss single digit value");
        var inputlen=input4.length;
        if(inputlen !==1){
            alert("you have not entered the correct value");
            input4=prompt("please enter the single digit value onl;y");
            document.getElementById("inputValu4").innerText=input4;
        }
        else{
            document.getElementById("inputValu4").innerText=input4;
            
        }

        document.write("if");
        document.write("<br>");
        if(input4 == randNum4 || input4 == randNum3|| input4 == randNum2 || input4 == randNum1 )
        {
            if(input4==randNum4)
            {
                document.write("good job 4th value is correct");
                document.write("<br>");
            }
            if(input4==randNum3)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input4==randNum2)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input4==randNum1)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
        }
        document.write("<br>");
        if(input3 == randNum4 || input3 == randNum3|| input3 == randNum2 || input3 == randNum1 )
        {
            if(input3==randNum4)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input3==randNum3)
            {
                document.write("good job 4th value is correct");
                document.write("<br>");
            }
            if(input3==randNum2)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input3==randNum1)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
        }
        document.write("<br>");
        if(input2 == randNum4 || input2 == randNum3|| input2 == randNum2 || input2 == randNum1 )
        {
            if(input2==randNum4)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input2==randNum3)
            {
                
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input2==randNum2)
            {
                document.write("good job 4th value is correct");
                document.write("<br>");
            }
            if(input2==randNum1)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
        }
        document.write("<br>");
        if(input1 == randNum4 || input1 == randNum3|| input1 == randNum2 || input1 == randNum1 )
        {
            if(input1==randNum4)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input1==randNum3)
            {
                
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input1==randNum2)
            {
                document.write("good job  value is present but different location");
                document.write("<br>");
            }
            if(input1==randNum1)
            {
                document.write("good job 4th value is correct");
                document.write("<br>");
            }
        }
        if(input1 == randNum4 || input1 == randNum3|| input1 == randNum2 || input1 == randNum1 )
        {
            document.write("sorry no match  ");
                document.write("<br>");
        }
  
    }

    // document.getElementById("inputValu1").innerText=input1;
    // document.getElementById("inputValu1").innerText=input1;
    // document.getElementById("inputValu1").innerText=input1;
   
    // document.write(inputval1);
   



