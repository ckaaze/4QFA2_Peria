function check(x,y){
    x = document.getElementById("beginningValue").value;
    y = document.getElementById("endingValue").value;
    if (x > 10 || y > 10 || x < 2 || y < 2){
        alert("Please enter numbers between 2 and 10.");
        return false;
    } return true;
}

function generateTable(){
    var a = document.getElementById("beginningValue").value;
    var b = document.getElementById("endingValue").value;
    if (!check(a, b)) {
        return;
    }  

    document.getElementById("content").innerHTML = "";
    var table = "<table>";
    for (counter1 = 1; counter1 <= a; counter1++) {
        table += "<tr>";
        for (counter2 = 1; counter2 <= b; counter2++) {
            table += "<td>" + (counter1 * counter2) + "</td>";
        }
        table += "</tr>";       
    }
    table += "</table>";
    document.getElementById("content").innerHTML = table;            
}        