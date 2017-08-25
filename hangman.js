let wordlist;
let chosen;
let good = true;
let life = 11;
let dash = [];
let notfound = 1;

function request() {

    let requestURL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';
    let request = new XMLHttpRequest(); //asynchronous 
    request.open('GET', requestURL);
    request.responseType = 'text'
    request.send();
    request.onload = function () {
        let requestData = request.response;

        wordlist = requestData.split("\n");

        choose();

    }

}

function choose() {
    //  while(good){
    let ran = Math.floor((Math.random() * wordlist.length) + 1);
    chosen = wordlist[ran];
    console.log(chosen);
    //console.log(chosen.length);
    for (let i = 0; i <= chosen.length; i++) {
        // document.getElementById("w").innerHTML+= "_ ";
        dash[i] = "_ "

    }
    document.getElementById("w").innerHTML = dash;
}

function guess() {
    let l = document.getElementById("letter").value;
    for (let i = 0; i <= chosen.length; i++) {
        if (l === chosen[i]) {
            dash[i] = l;
            notfound = 0;
        }

    }

    console.log(notfound);
    if (notfound === 1) {
        //alert("HERE");
        //alert("not found");
        //console.log("Not found");
        life--;
        //console.log("Life isL: "+life);
        draw();
    }
    document.getElementById("w").innerHTML = dash;
    notfound = 1;
}



function draw() {

    if (life === 10) {
        document.getElementById("b").innerHTML += "_ _|_ _ _ ";
        document.getElementById("b").innerHTML += "<br>";
        document.getElementById("b").innerHTML += " |  |  ";
    }
    else if (life === 9) {
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
        //document.getElementById("m").innerHTML += "<br>";
    }
    else if (life === 8) {
        document.getElementById("t").innerHTML += "_ _ _ _ _ _ ";
        document.getElementById("t").innerHTML += "<br>";
       
    }
    else if (life === 7) {
        document.getElementById("m").innerHTML = "";
        document.getElementById("m").innerHTML += "|        | ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
       
    }
    else if (life === 6) {
        document.getElementById("m").innerHTML = "";
        document.getElementById("m").innerHTML += "|     | ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|     O";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
       
    }
    else if (life === 5) {
        document.getElementById("m").innerHTML = "";
        document.getElementById("m").innerHTML += "|     | ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|     O";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    /";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
       
    }
    else if (life === 4) {
        document.getElementById("m").innerHTML = "";
        document.getElementById("m").innerHTML += "|     | ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|     O";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    /|";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
       
    }

    else if (life === 3) {
        document.getElementById("m").innerHTML = "";
        document.getElementById("m").innerHTML += "|     | ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|     O";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    /|\\";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "| ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
    }
    else if (life === 2) {
        document.getElementById("m").innerHTML = "";
        document.getElementById("m").innerHTML += "|     | ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|     O";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    /|\\";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    /";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
    }
    else if (life === 1) {
        document.getElementById("m").innerHTML = "";
        document.getElementById("m").innerHTML += "|     | ";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|     O";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    /|\\";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    / \\";
        document.getElementById("m").innerHTML += "<br>";
        document.getElementById("m").innerHTML += "|    ";
       
       
    }
    if(life===1){
        dead();
    }
  
    
}
function dead(){
    alert("Life is cruel. You are dead. "+ chosen.toUpperCase()+" killed you.");
}