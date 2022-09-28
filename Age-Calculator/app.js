// const container;
// const error;

function getAge() {


    let userinputdate = document.getElementById('dob').value;
    let dob = new Date(userinputdate);

    // document.getElementById('years').innerHTML = dob;


    if (userinput == null || userinput == '') {
        document.getElementById("years").innerHTML = "**Choose a date please!";
        // return false;
    } else {

        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);
        // console.log(age_dt)


        //extract year from date      
        var year = age_dt.getUTCFullYear();

        //now calculate the age of the user  
        var age = Math.abs(year - 1970);
        // document.getElementById('years').innerHTML = age;

        return age;
    }

}




function calcAge() {

}

function displayAge() {
    document.getElementById('years').innerHTML = getAge();

}
window.onload.displayAge();
