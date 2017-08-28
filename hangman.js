let wordlist;
let chosen;
let good = true;
let life = 11;
let dash = [];
let notfound = 1;
let diff;
let correct = 0;
let wordCount;
let dashCount;
let dead=0;
let countDone=1;
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

    while (correct === 0) {
        let ran = Math.floor((Math.random() * wordlist.length) + 1);
        chosen = wordlist[ran];
        console.log(chosen.length);

        if (diff === "hard") {
            if (chosen.length >2 && chosen.length <= 5) {
                correct = 1
                console.log("hard");
            }
        }
        else if(diff==="medium"){
            if (chosen.length > 5 && chosen.length <= 7) {
                correct = 1
                console.log("medium");
            }
        }
        else if(diff==="easy"){
            if (chosen.length > 7) {
                correct = 1
                console.log("easy");
            }
        }


    }
    correct=0;
    console.log(chosen);

    //console.log(chosen.length);
    for (let i = 0; i < chosen.length - 1; i++) {
        // document.getElementById("w").innerHTML+= "_ ";
        dash[i] = "_ "

    }
    document.getElementById("w").innerHTML = dash;
}
//here
function guess() { //l
    let l = document.getElementById("letter").value;
    document.getElementById("g").innerHTML+= l+",";
    console.log(l);
    console.log("chosen length"+chosen.length);
    for (let i = 0; i <= chosen.length; i++) {
        if (l === chosen[i]) {
            dash[i] = l;
            notfound = 0;
            countDone++;
            console.log("count done is "+countDone);
            
        }

    }

    if (notfound === 1) {

        life--;

        draw();
    }
    document.getElementById("w").innerHTML = dash;
    notfound = 1;
    if(countDone===chosen.length){
        alert("Winner. You guessed: "+chosen);
        location.reload();

    }
}



function easy() {
    diff = "easy";
    request();
}

function medium() {
    diff = "medium";
    request();
}

function hard() {
    diff = "hard";
    request();
}



//printing hangman 
function draw() {

    if (life === 10) {
        document.getElementById("b").innerHTML += "_ _|_ _ _ ";
        document.getElementById("b").innerHTML += "<br>";
        document.getElementById("b").innerHTML += " |  |  ";
    } else if (life === 9) {
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
    } else if (life === 8) {
        document.getElementById("t").innerHTML += "_ _ _ _ _ _ ";
        document.getElementById("t").innerHTML += "<br>";

    } else if (life === 7) {
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

    } else if (life === 6) {
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

    } else if (life === 5) {
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

    } else if (life === 4) {
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

    } else if (life === 3) {
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
    } else if (life === 2) {
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
    } else if (life === 1) {
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
    if (life === 1) {
        deadloss();
    }


}

function deadloss() {
    dead=1;
    alert("Life is cruel. You are dead. " + chosen.toUpperCase() + " killed you.");
    document.getElementById("w").innerHTML = "";
   location.reload();
}