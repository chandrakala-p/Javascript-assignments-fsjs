// const container;
// const error;

const error = document.querySelector(".error");
const age = document.querySelector(".age");

//present date
let presentDate = new Date();
function getAge() {


    let userinputdate = document.getElementById('dob').value;
    let dob = new Date(userinputdate);



    //to get the day, month, year
    let myDate = dob.getDate();
    let myMonth = dob.getMonth();
    let myYear = dob.getFullYear();

    calcAge(presentDate, myDate, myMonth, myYear)

}
getAge();
// console.log(new Date().getDate());




function calcAge(presetDate, myDate, myMonth, myYear) {

    let todaysDate = presetDate.getDate();
    let todaysMonth = presetDate.getMonth();
    let todaysYear = presetDate.getFullYear()
    // console.log(todaysDate)
    // console.log(todaysMonth)
    // console.log(todaysYear)

    // check if selected age is eqaul to curret age 

    if (myDate == todaysDate && myMonth == todaysMonth && myYear == todaysYear) {
        age.style.display = "none";
        error.style.display = "block";
        error.textContent = "You are not yet born..!!! Time Traveller";
        return;
    }

    // check if selected age is greater than curret age 


    if (myDate > todaysDate || myMonth > todaysMonth || myYear > todaysYear) {
        age.style.display = "none";
        error.style.display = "block";
        error.textContent = "Invalid age enterd...!!! Time Traveller";
        return;
    }

    let mytotalYear = todaysYear - myYear
    let mytotalMonth = todaysMonth - myMonth
    let mytotalDays = todaysDate - myDate


    error.style.display = "block";
    // console.log(mytotalMonth)
    // console.log(mytotalDays)

    displayAge(mytotalYear, mytotalMonth, mytotalDays)

}

function displayAge(mytotalYear, mytotalMonth, mytotalDays) {

    let year = document.getElementById("years");
    let months = document.getElementById("months");
    let days = document.getElementById("days");
    let disc = document.querySelector(".desc")


    year.innerText = mytotalYear
    months.innerText = mytotalMonth
    days.innerText = mytotalDays



    disc.innerText = `Your Age is : ${mytotalYear}`


}