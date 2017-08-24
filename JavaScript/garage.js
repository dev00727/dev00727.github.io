  let garage = [];
  

  function checkIn() {
      let car = {
          name: "",
          regNum: "",
          ownNum: ""
      };
      car.name = document.getElementById("name").value;
      car.regNum = document.getElementById("rnum").value;
      car.ownNum = document.getElementById("onum").value;
      garage.push(car);
      alert("checked in!");
  }

  function checkOut() {
      let r = document.getElementById("cnum").value;

      for (let i = 0; i <= garage.length; i++) {

          if (garage[i].regNum === r) {
              garage.splice(i, 1);
          }

      }
  }

  function show() {

      let ul = document.createElement('ul');
      document.getElementById('mypara').appendChild(ul);
      for (let i = 0; i <= garage.length; i++) {
          let li = document.createElement('li');
          li.appendChild(document.createTextNode("Name: " + garage[i].name));
          ul.appendChild(li);
          li.appendChild(document.createTextNode(" Registration number: " + garage[i].regNum));
          ul.appendChild(li);
          li.appendChild(document.createTextNode(" Owner number: " + garage[i].ownNum));
          ul.appendChild(li);


      }
  }

  function calculate() {

  }