
let garage = [];
let carList = [];


function checkIn(g) {
    let car = {
        name: "",
        regNum: "",
        seats: "",
        faults: null
    };
    car.name = document.getElementById("name").value;
    car.regNum = document.getElementById("rnum").value;
    car.seats = document.getElementById("onum").value;
    car.faults = document.getElementById("faults").value;
    if (g === 1) {
        garage.push(car);
        alert("checked in garage");
    }
    else {
        carList.push(car);
        alert("checked in car list!");
    }

}

function checkOut() {
    let r = document.getElementById("cnum").value;

    for (let i = 0; i <= garage.length; i++) {

        if (garage[i].regNum === r) {
            garage.splice(i, 1);
        }

    }
}

function show(state) {

    let ul = document.createElement('ul');
    document.getElementById('mypara').appendChild(ul);

    for (let i = 0; i <= state.length; i++) {
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(" Name: " + state[i].name));
        ul.appendChild(li);
        li.appendChild(document.createTextNode(" Registration number: " + state[i].regNum));
        ul.appendChild(li);
        li.appendChild(document.createTextNode(" Seat number: " + state[i].seats));
        ul.appendChild(li);
        li.appendChild(document.createTextNode(" Faults: " + state[i].faults));
        ul.appendChild(li);
    }
}

function calculate() {
    let r = document.getElementById("carreg").value;
    let print = 0;
    for (let i = 0; i <= garage.length; i++) {

        if (garage[i].regNum === r) {
            console.log("inside");
            num = garage[i].seats;
            let price = num * 50;
            document.getElementById("price").innerHTML = price;
            print = 1;
        }

    }
    /*if(print===0){   Fix here!
        alert("no car");
       document.getElementById("price").innerHTML("Car not found!");
    }*/

}
function toGarage() {

    checkIn(1);
}
function toCar() {

    checkIn(0);
}

function showCar() {
    document.getElementById("mypara").innerHTML = "Showing Car";
    show(carList);
}


//Console task
function createCar( name, num, seat, fault) {
    let car = {
        name: "",
        regNum: "",
        seats: "",
        faults: null
    };
    car.name = name;
    car.regNum = num;
    car.seats = seat;
    car.faults = fault;
    // if (g === 1) {
    //     garage.push(car);
    //     alert("checked in garage");
    // }
    // else {
    //     carList.push(car);
    //     alert("checked in car list!");
    // }
    //carList.push(car);
    garage.push(car);

}
function choose() {
    let test = document.getElementById("tc").value;
    let res = test.split(" ");

    for (let i = 0; i <= res.length; i++) {
       // console.log(res[i]);

        if (res[0] === "create") {
            createCar(res[2], res[3], res[4], res[5]);
        }
        if (res[i] === "output") {
            showGarage();
        }
    }
   
}
function showGarage() {
    document.getElementById("mypara").innerHTML = "Showing Garage";
    console.log("Came to garage");
    show(garage);
}