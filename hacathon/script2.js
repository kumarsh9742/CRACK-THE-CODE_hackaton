var k = 'randNum'; 
    var i = 0; 
    for(i = 1; i < 5; i++) { 
        eval('var ' + k + i + '= ' + Math.floor((Math.random() * 10) + 1) + ';'); 
    } 
    document.write("value1=" + randNum1,"<br>"); 
    document.write("value2=" + randNum2,"<br>"); 
    document.write("value3=" + randNum3,"<br>"); 
    document.write("value4=" + randNum4,"<br>");
    
var randarray =[];
randarray.push(randNum1);
randarray.push(randNum2); 
randarray.push(randNum3); 
randarray.push(randNum4);  
document.write(randarray);

document.write("<br>");
for(maini=1;maini<5;maini++){
      var inputvari = 'input';
      eval('var ' + inputvari + maini + '= ' + prompt("please enter the singledight number") + ';'); 
}
document.write("input1=" + input1,"<br>");
document.write("input2=" + input2,"<br>");
document.write("input3=" + input3,"<br>");
document.write("input4=" + input4,"<br>");

var inputarray =[];
inputarray.push(input1);
inputarray.push(input2);
inputarray.push(input3);
inputarray.push(input4);

document.write(inputarray);
