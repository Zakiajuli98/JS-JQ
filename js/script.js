//js
//definition
const d = function (a, b) {return a * b};
function dfRs(){
	document.getElementById("df_r").innerHTML = d(4, 3);
}


//display
const persn = {
  name: "John",
  age: 30,
  city: "New York"
}
function disPlay(){
	document.getElementById("ds_p").innerHTML = persn.name + ", " + persn.age + ", " + persn.city;
}


//dlt
const prsn = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
delete prsn.age;
function dltAge(){
	document.getElementById("dlt_a").innerHTML =
prsn.firstname + " is " + prsn.age + " years old.";
}


//objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "bdltAge()lue"
};
function obJects(){
	document.getElementById("ob_j").innerHTML =
person.firstName + " is " + person.age + " years old.";
}


//age
function aGe(){
  let age = document.getElementById("age").value;
  let voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("ag_e").innerHTML = voteable + " to vote.";
} 


//true/false
function trueFalse(){
	document.getElementById('t_f').innerHTML=Boolean(10 > 9);
}


//show day
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
function showDay(){
	document.getElementById("da_y").innerHTML = "Today is " + day;
}


//month sorted
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
function monthSort(){
	document.getElementById("mn_s").innerHTML = sorted;
}


//fruits reverse
const fruitsr = ["Banana", "Orange", "Apple", "Mango"];
fruitsr.reverse();
function fruitsReverse(){
	document.getElementById("ft_r").innerHTML = fruitsr;
}


//fruits position
const fruitsp = ["Apple", "Orange", "Apple", "Mango"];
let position = fruitsp.lastIndexOf("Apple") ;
function fruitsPosition(){
	document.getElementById('ft_p').innerHTML =  "Apple is found in position " + position;
}


//fruits join
const fruit = ["Banana", "Orange", "Apple", "Mango"];
function fruitsJoin(){
	document.getElementById('ft_j').innerHTML = fruits.join(" * ");
}

//fruits name
const fruits = ["Banana", "Orange", "Apple", "Mango"];
function fruitsName(){
	document.getElementById('ft_n').innerHTML = fruits.toString();
}


//template
let firstman ="John";
let lastman ="Doe";
let man = `Welcome ${firstman}, ${lastman}!`;
function temPlate(){
	document.getElementById('tmp').innerHTML= man;
}


//position
let msg = "Please locate where 'locate' occurs!";
let index = msg.lastIndexOf("locate");
function posiTion(){
	document.getElementById('psn').innerHTML =index;
}


//textchar
var text = "HELLO WORLD!";
function textChar(){
	document.getElementById('tcr').innerHTML= text.charAt(11);
}


//car data
const car = {type:"Fiat", model:"500", color:"white"};

function carData(){
   document.getElementById('crd').innerHTML= "The car model is " + car.model; 
}


//The %= Operator
let k = 10;
k %= 5;
function remaInder(){
	document.getElementById('rmnd').innerHTML = +k;
}


//The /= Operator
let z = 10;
z /= 5;
function diviSion(){
	document.getElementById('dv').innerHTML = z;
}

//Multiplication Assignment
let y = 10;
y *= 5;
function multiPlication(){
     document.getElementById('mltp').innerHTML= "Value of y is: " + y;
}

//Operator
let x = 10;
x += 5;
function operator(){
	document.getElementById('t_p').innerHTML= "Value of x is: " + x;
}

//car name
let carName1="Volvo XC60";
let carName2="Volvo XC60";
function carName(){
	document.getElementById('c_n').innerHTML=carName1 + "<br>" + 
carName2;
}

//alert text
function alertText(){
	var info= document.getElementsByTagName('h3');
	alert(info.length);
}

//variable
let number1,number2,number3;
number1 = 6;
number2 = 3;
number3 = 2;
number1 += number2 += number3;
function calCulation(){
    document.getElementById('value').innerHTML=number1;
}

//show/hide
function imgShow(){
    document.getElementById('img').style.display="block";
}
function imgHide(){
    document.getElementById('img').style.display="none";
}

//fontsize change 
function fontChange(){
    document.getElementById('f_c').style.fontSize="40px";
}

//change color
function changeColor(){
    document.getElementById('c_c').style.color="green";
}

//bulb on/off
function bulbOn(){
	document.getElementById('bulb').src="images/on.gif";
}
function bulbOff(){
	document.getElementById('bulb').src="images/off.gif";
}

//show date
function showDate(){
	document.getElementById('s_d').innerHTML= Date();
}

//text change
function textChange(){
	document.getElementById('t_c').innerHTML="Hello World!";
}

