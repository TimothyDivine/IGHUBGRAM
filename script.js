
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


let username;
let number;
let address;
let email;
let bankName;
let cardNumber;
let numbers;
let pin;
let homeAddress;
let time;
let items;
let item;
let date;
let feedback;

//Personal Information

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("Name").value;
    console.log(`username is = ${username}`);

    number = document.getElementById("number").value;
    console.log(`Number = ${number}`);

    address = document.getElementById("address").value;
    console.log(`Address = ${address}`);

    email = document.getElementById("email").value;
    console.log(`Email = ${email}`);

    //Payment Details

    bankName = document.getElementById("bankName").value;
    console.log(`Bank Name = ${bankName}`);


    cardNumber = document.getElementById("cardNumber").value;
    console.log(`Card Number = ${cardNumber}`);


    pin = document.getElementById("pin").value;
    console.log(`Pin = ${pin}`);


    //Delivery Address


    homeAddress = document.getElementById("homeAddress").value;
    console.log(`Home Address = ${homeAddress}`);

    time = document.getElementById("time").value;
    console.log(`Time = ${time}`);

    items = document.getElementById("items").value;
    console.log(`Items = ${items}`);
    

//Delivery Location

    item = document.getElementById("item").value;
    console.log(`Item = ${item}`);

    date = document.getElementById("date").value;
    console.log(`Date = ${date}`);

    feedback = document.getElementById("feedback").value;
    console.log(`Feedback = ${feedback}`);

}