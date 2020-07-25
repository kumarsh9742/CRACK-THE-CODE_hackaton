
 var mainDiv = document.createElement("div");
 mainDiv.setAttribute("class","outerDiv");
 document.body.append(mainDiv);

 var mainDivstyle = document.querySelector(".outerDiv");
 mainDivstyle.style.width="100%";
 mainDivstyle.style.height="550px";
 mainDivstyle.style.margin="0 auto";
 mainDivstyle.style.postion="relative";
 mainDivstyle.style.top="40%";
 mainDivstyle.style.backgroundColor="cyan";


 var mainDiv2 = document.createElement("div");
 mainDiv2.setAttribute("class","outerDiv1");
 mainDiv.appendChild(mainDiv2);

 var mainDiv2style = document.querySelector(".outerDiv1");
 mainDiv2style.style.width="60%";
 mainDiv2style.style.height="550px";
 mainDiv2style.style.margin="0 auto";
 mainDiv2style.style.backgroundImage="linear-gradient(45deg, red, blue)";
 mainDiv2style.style.postion="absolute";
 mainDiv2style.style.top="40%";

 var randomCircle = document.createElement("span");
 mainDiv2.setAttribute("class","outerDiv1");
 mainDiv.appendChild(mainDiv2);

 var mainDiv2style = document.querySelector(".outerDiv1");
 mainDiv2style.style.width="60%";
 mainDiv2style.style.height="550px";
 mainDiv2style.style.margin="0 auto";
 mainDiv2style.style.backgroundImage="linear-gradient(45deg, red, blue)";
 mainDiv2style.style.postion="absolute";
 mainDiv2style.style.top="40%";




 function generate_table() {

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  

    for (var i = 0; i < 2; i++) {
      var row = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    mainDiv2.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }
